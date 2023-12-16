import express from 'express';
import { userControllers } from './user.controller';

const route = express.Router();

route.post('/create-student', userControllers.createStudent);

export const UsersRoute = route;
