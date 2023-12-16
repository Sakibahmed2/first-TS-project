import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { SemesterRegistrationServices } from './semesterRegistration.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.createSemesterRegistrationIntoDB(
        req.body,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Registration is created successfully!',
      data: result,
    });
  },
);

const getAllSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await SemesterRegistrationServices.getAllSemesterRegistrationFromDB(
        req.query,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'All semester registration ar retrieved successfully !',
      data: result,
    });
  },
);

const getSingleSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await SemesterRegistrationServices.getSingleSemesterRegistrationFromDB(
        id,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Single semester registration retrieved successfully',
      data: result,
    });
  },
);

const updateSemesterRegistration = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await SemesterRegistrationServices.updateSemesterRegistrationFromDB(
        id,
        req.body,
      );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Semester registration updated successfully',
      data: result,
    });
  },
);

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
};
