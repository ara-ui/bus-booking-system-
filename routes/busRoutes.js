const express=require('express');

const router =express.Router();

const {
    createbus,
    getAvailableBuses
}=require('../controller/busController');


router.post('/',createbus);
router.get('/available/:seats',getAvailableBuses);


module.exports= router;