import * as Yup from 'yup';
import { FormUserData } from '../store/slices/types';

export const createValidationSchema = (): Yup.ObjectSchema<FormUserData> => {
  return Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Z]/, 'Name must start with an uppercase letter')
      .required('Name is required'),
    age: Yup.number()
      .positive('Age must be positive')
      .required('Age is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
        'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character',
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
    gender: Yup.string().required('Gender is required'),
    termsAccepted: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Terms must be accepted'),
    picture: Yup.mixed<File>()
      .required('Picture is required')
      .test('fileFormat', 'Unsupported Format', (value) => {
        if (value instanceof File) {
          const supportedFormats = ['image/jpeg', 'image/png'];
          return supportedFormats.includes(value.type);
        }
        return false;
      }),
    country: Yup.string().required('Country is required'),
  });
};
