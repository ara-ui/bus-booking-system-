const db=require('../db');

const createbus=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body;
    const sql="insert into Buses(busNumber,totalSeats,availableSeats) values (?,?,?)";
    

    db.execute(sql,[busNumber,totalSeats,availableSeats],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).json({
                message:err.message
            });
        }
        console.log("Bus added");
        res.status(201).json({
            message:"Bus added successfully",
            busId:result.insertId
        });
    });

};



const getAvailableBuses=(req,res)=>{
    const seats=req.params.seats;

    const sql="select * from Buses where availableSeats > ?";

    db.execute(sql,[seats],(err,result)=>{

        if(err){
            return res.status(500).json({
                message:err.message
            });
        }
        res.json(result);
    });
};

module.exports={
    createbus,
    getAvailableBuses
};