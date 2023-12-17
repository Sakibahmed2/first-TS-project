import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { OfferedCourseServices } from './offeredCourse.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered course created successfully',
    data: result,
  });
});

const getAllOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.getAllOfferedCourseFromDB(
    req.query,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered courses retrieved successfully',
    data: result,
  });
});

const getSingleOfferedCourse = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.getSingleOfferedCourseFromDB(id);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Offered course retrieved successfully',
      data: result,
    });
  },
);

const updateOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
    id,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered course created successfully',
    data: result,
  });
});

const deleteOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await OfferedCourseServices.deleteOfferedCourseFromDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Offered course deleted successfully',
    data: null,
  });
});

export const OfferedCourseControllers = {
  createOfferedCourse,
  updateOfferedCourse,
  getAllOfferedCourse,
  getSingleOfferedCourse,
  deleteOfferedCourse,
};
