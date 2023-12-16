/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { studentServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a student validation using Joi
    const { password, student: studentData } = req.body;

    // const zodParsedData = userValidation.userSchema.parse(student);

    const result = await studentServices.createStudentIntoDB(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

export const userControllers = {
  createStudent,
};
