import express from 'express';

import * as TaskController from '../controller/member.js';


const router = express.Router();

router.post('/idCheck',TaskController.members);
router.post('/login',TaskController.login);

export default router;