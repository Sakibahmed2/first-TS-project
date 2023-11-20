import Joi from 'joi';

//Joi validation using

const userNameSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'any.required': 'First name is required.',
  }),
  middleName: Joi.string(),
  lastName: Joi.string().required().messages({
    'any.required': 'Last name is required.',
  }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father name is required.',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father occupation is required.',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father contact number is required.',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother name is required.',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother occupation is required.',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother contact number is required.',
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Local guardian name is required.',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Local guardian occupation is required.',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Local guardian contact number is required.',
  }),
});

const studentSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student ID is required.',
  }),
  name: userNameSchema.required().messages({
    'any.required': 'Full name is required.',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.required': 'Gender is required.',
    'any.only': 'Gender must be either "male" or "female".',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email address is required.',
    'string.email': 'Invalid email address.',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Invalid blood group.',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required.',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required.',
  }),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: Joi.string(),
  isActive: Joi.string().valid('Active', 'blocked').default('Active').messages({
    'any.only': 'Invalid status. Must be either "Active" or "blocked".',
  }),
});

export default studentSchema;
