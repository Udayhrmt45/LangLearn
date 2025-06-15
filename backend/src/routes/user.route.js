import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getRecommendedUsers, getMyFriends ,sendFriendRequest, acceptFriendRequest, getFriendRequests, getOutgoingFriendReqs} from '../controllers/user.controller.js';

const router = express.Router();

//apply protectRoute middleware to all routes in this router
router.use(protectRoute);

router.get("/app", getRecommendedUsers);

router.get("/app/friends", getMyFriends);

router.post("/app/friend-request/:id", sendFriendRequest);

router.put("/app/friend-request/:id/accept", acceptFriendRequest);

router.get("/app/friend-requests", getFriendRequests);
router.get("/app/outgoing-friend-requests", getOutgoingFriendReqs);


export default router;