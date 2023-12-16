import { Router } from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = Router();

router.post('/', SemesterRegistrationController.createSemesterRegistration);

router.get('/', SemesterRegistrationController.getAllSemesterRegistration);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch('/:id', SemesterRegistrationController.updateSemesterRegistration);

export const SemesterRegistrationRoutes = router;
