import express from 'express';
import { login, logout, signup, onboard } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);//logout is a post request because we are clearing the cookie

router.post("/onboarding", protectRoute, onboard);

// check if user is logged in
router.get("/app/me", protectRoute, (req,res) =>{
    res.status(200).json({ success: true, user: req.user });
})

export default router;

