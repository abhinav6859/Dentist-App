import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  cancelAppointment,
  getMyAppointments,
} from '../controllers/appointmentController.js';

const router = express.Router();

router.route('/')
  .post(protect, asyncHandler(createAppointment))
  .get(protect, admin, asyncHandler(getAppointments));

router.get('/myappointments', protect, asyncHandler(getMyAppointments));

router.route('/:id')
  .get(protect, asyncHandler(getAppointmentById))
  .put(protect, asyncHandler(updateAppointment))
  .delete(protect, asyncHandler(cancelAppointment));

export default router;