


import Store from '../models/office.js';

// Get all users
export const getStores = async (request, response) => {
    try{
        
        const users = await Store.find();
           
       response.status(200).json(users); 
        
        
        }
        
    catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of the user in database
export const addStore = async (request, response) => {
    const user = request.body;
    
    const newUser = new Store(user);
    console.log(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// Get a user by id
export const getStoreById = async (request, response) => {
    try{
        const user = await Store.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editStore = async (request, response) => {
    let user = request.body;

    const editStore = new Store(user);
    try{
        await Store.updateOne({_id: request.params.id}, editStore);
        response.status(201).json(editStore);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteStore = async (request, response) => {
    try{
        await Store.deleteOne({_id: request.params.id});
        response.status(201).json("store deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
