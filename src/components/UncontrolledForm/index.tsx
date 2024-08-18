import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setUncontrolledFormData } from '../../store/slices/uncontrolledFormSlice';
import { RootState } from '../../store/store';
import { StoredUserData } from '../../store/slices/types';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import { createValidationSchema } from '../../utils/validationSchema';
import '../ReactHookForm/form.css';

const UncontrolledForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const countries = useSelector((state: RootState) => state.countries);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(formRef.current!);
    const data: Partial<StoredUserData> = {};

    formData.forEach((value, key) => {
      switch (key) {
        case 'termsAccepted':
          data.termsAccepted = value === 'on';
          break;
        case 'age':
          data.age = value ? Number(value) : 0;
          break;
        case 'picture':
          data.picture =
            value instanceof File ? URL.createObjectURL(value) : null;
          break;
        case 'name':
        case 'email':
        case 'password':
        case 'gender':
        case 'country':
          data[key] = value as string;
          break;
        default:
          console.warn(`Unexpected form field: ${key}`);
      }
    });

    try {
      await createValidationSchema().validate(data, { abortEarly: false });
      const userData: StoredUserData = {
        name: data.name || '',
        age: data.age || 0,
        email: data.email || '',
        password: data.password || '',
        gender: data.gender || '',
        termsAccepted: data.termsAccepted || false,
        picture: data.picture || null,
        country: data.country || '',
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(setUncontrolledFormData(userData));
      setIsLoading(false);
      navigate('/');
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Record<string, string> = {};
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input type="radio" name="gender" value="male" /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" /> Female
        </label>
        <label>
          <input type="radio" name="gender" value="other" /> Other
        </label>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" id="termsAccepted" name="termsAccepted" />I
          accept the terms and conditions
        </label>
        {errors.termsAccepted && (
          <p className="error">{errors.termsAccepted}</p>
        )}
      </div>
      <div>
        <label htmlFor="picture">Picture:</label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/png, image/jpeg"
        />
        {errors.picture && <p className="error">{errors.picture}</p>}
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" list="countries" />
        <datalist id="countries">
          {countries.map((country, index) => (
            <option key={index} value={country} />
          ))}
        </datalist>
        {errors.country && <p className="error">{errors.country}</p>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UncontrolledForm;
