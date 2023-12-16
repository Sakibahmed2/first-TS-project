import { Schema, model } from 'mongoose';
import { TOfferedCourse } from './offeredCourse.interface';
import { Days } from './offeredCourse.constant';

const offeredCourseSchema = new Schema<TOfferedCourse>(
  {
    semesterRegistration: {
      type: Schema.ObjectId,
      required: true,
      ref: 'SemesterRegistration',
    },
    academicSemester: {
      type: Schema.ObjectId,
      required: true,
      ref: 'AcademicSemester',
    },
    academicFaculty: {
      type: Schema.ObjectId,
      required: true,
      ref: 'AcademicFaculty',
    },
    academicDepartment: {
      type: Schema.ObjectId,
      required: true,
      ref: 'AcademicDepartment',
    },
    course: {
      type: Schema.ObjectId,
      required: true,
      ref: 'Course',
    },
    faculty: {
      type: Schema.ObjectId,
      required: true,
      ref: 'Faculty',
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    section: {
      type: Number,
      required: true,
    },
    days: {
      required: true,
      enum: Days,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const OfferedCourse = model<TOfferedCourse>(
  'OfferedCourse',
  offeredCourseSchema,
);
