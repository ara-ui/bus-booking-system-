const express= require('express');
const router=express.Router();

const {
    createUser,
    updateUser,
    deleteUser
}=require('../controller/userController');

router.post('/',createUser);

router.put('/:id',updateUser);

router.delete('/:id',deleteUser);

module.exports=router;