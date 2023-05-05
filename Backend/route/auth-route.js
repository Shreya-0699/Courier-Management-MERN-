import express from 'express';
import { login, signUp } from '../controllers/user-controller.js';
import User from '../models/user.js';
//import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controllers/system-controller.js';

const authrouter = express.Router();


authrouter.post('/signup',signUp);


authrouter.post('/login',login);


export default authrouter;

