import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setReactHookFormData } from '../../store/slices/reactHookFormSlice';
import { RootState } from '../../store/store';
import Loading from '../Loading/Loading';
import Button from '../Button/Button';
import { createValidationSchema } from '../../utils/validationSchema';
import { FormUserData, StoredUserData } from '../../store/slices/types';
import './form.css';

const ReactHookForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state: RootState) => state.countries);
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: FormUserData = {
    name: '',
    age: 21,
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    termsAccepted: false,
    picture: null,
    country: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormUserData>({
    resolver: yupResolver(createValidationSchema()),
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = async (data: FormUserData) => {
    setIsLoading(true);
    const userData: StoredUserData = {
      ...data,
      picture: data.picture ? URL.createObjectURL(data.picture) : null,
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch(setReactHookFormData(userData));
    setIsLoading(false);
    navigate('/');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
        <label htmlFor="name">Name:</label>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <input type="text" id="name" {...field} />}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              id="age"
              {...field}
              value={field.value || ''}
            />
          )}
        />
        {errors.age && <p className="error">{errors.age.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <input type="email" id="email" {...field} />}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input type="password" id="password" {...field} />
          )}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <input type="password" id="confirmPassword" {...field} />
          )}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword.message}</p>
        )}
      </div>
      <div>
        <label>Gender:</label>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <>
              <label>
                <input type="radio" {...field} value="male" /> Male
              </label>
              <label>
                <input type="radio" {...field} value="female" /> Female
              </label>
              <label>
                <input type="radio" {...field} value="other" /> Other
              </label>
            </>
          )}
        />
        {errors.gender && <p className="error">{errors.gender.message}</p>}
      </div>
      <div>
        <Controller
          name="termsAccepted"
          control={control}
          render={({ field }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
                ref={field.ref}
              />
              I accept the terms and conditions
            </label>
          )}
        />
        {errors.termsAccepted && (
          <p className="error">{errors.termsAccepted.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="picture">Picture:</label>
        <Controller
          name="picture"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              id="picture"
              accept="image/png, image/jpeg"
              onChange={(e) => field.onChange(e.target.files?.[0] || null)}
            />
          )}
        />
        {errors.picture && <p className="error">{errors.picture.message}</p>}
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <select {...field} id="country">
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          )}
        />
        {errors.country && <p className="error">{errors.country.message}</p>}
      </div>
      <Button type="submit" disabled={!isValid}>
        Submit
      </Button>
    </form>
  );
};

export default ReactHookForm;
