import { isValidPhoneNumber } from 'react-phone-number-input';
import * as yup from 'yup';

export const CreateAgentSchema = yup.object().shape({
    firstName: yup.string().trim().required('first name is required'),
    lastName: yup.string().trim().required('last name is required'),
    gender: yup.string().required('gender is required'),
    phone: yup.string()
      .trim()
      .test({
        name: 'validPhone',
        exclusive: false,
        params: {},
        message: 'Enter a valid phone number',
        test: function (value: any): boolean {
          if (!value) return true;
          return isValidPhoneNumber(value);
        }
      })
      .optional(),
    email: yup.string().trim().email('Invalid email!').optional(),
    dateOfBirth: yup.date()
      .required('date of birth is required')
      .typeError('date of birth is required')
  });