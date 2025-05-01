import express from 'express';

import { ResponseController } from './response.controller';

const router = express.Router();

router.post('/', ResponseController.createResponse);
router.get('/', ResponseController.getAllResponses);
router.get('/:id', ResponseController.getResponseById);

export const ResponseRoute = router;
