const express= require('express');
const router=express.Router();

const {
    createUser,
    updateUser,
    deleteUser,
    getUser
}=require('../controller/userController');

router.post('/',createUser);

router.put('/:id',updateUser);

router.delete('/:id',deleteUser);

router.get('/',getUser);

module.exports=router;