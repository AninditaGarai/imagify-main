import express from 'express'
import {registerUser , loginUser, userCredits} from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js'
import {paymentRazorpay} from '../controllers/userController.js'
const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits', userAuth, userCredits )
userRouter.post('/pay-razor', userAuth, paymentRazorpay )

export default userRouter;

//localhost:4000/api/user/register    line 6
//localhost:4000/api/user/login     line 7
//localhost:4000/api/user/userCredits line 8