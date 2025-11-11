import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getClinics,
  getClinicById,
  createClinic,
  updateClinic,
  deleteClinic,
} from '../controllers/clinicController.js';

const router = express.Router();

router.route('/')
  .get(asyncHandler(getClinics))
  .post(protect, admin, asyncHandler(createClinic));

router.route('/:id')
  .get(asyncHandler(getClinicById))
  .put(protect, admin, asyncHandler(updateClinic))
  .delete(protect, admin, asyncHandler(deleteClinic));

export default router;