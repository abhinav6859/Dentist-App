import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getTreatments,
  getTreatmentById,
  createTreatment,
  updateTreatment,
  deleteTreatment,
} from '../controllers/treatmentController.js';

const router = express.Router();

router.route('/')
  .get(asyncHandler(getTreatments))
  .post(protect, admin, asyncHandler(createTreatment));

router.route('/:id')
  .get(asyncHandler(getTreatmentById))
  .put(protect, admin, asyncHandler(updateTreatment))
  .delete(protect, admin, asyncHandler(deleteTreatment));

export default router;