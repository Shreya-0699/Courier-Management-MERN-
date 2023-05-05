import express from 'express';
import { addStore, deleteStore, editStore, getStoreById, getStores } from '../controllers/admin-controller.js';
//import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controllers/system-controller.js';

const storeRouter = express.Router();


storeRouter.get('/',getStores);
storeRouter.post('/add',addStore);
storeRouter.get('/:id',getStoreById);
storeRouter.put('/:id',editStore);
storeRouter.delete('/:id',deleteStore)

export default storeRouter;

