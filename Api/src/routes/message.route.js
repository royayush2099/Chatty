import express from 'express'
import { protectRoute } from '../middlewares/auth.middleware.js';
import {getUsersForSidebar,getMessages,sendMessage} from '../controllers/message.controller.js'
const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.post("/send/:id", protectRoute, sendMessage); // move this before ":id"
router.get("/:id", protectRoute, getMessages);
export default router;