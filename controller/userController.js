const db=require('../db');

//insert user
const createUser = (req, res) => {
    const {name,email}=req.body;

    const sql="INSERT INTO Users(name,email) VALUES(?, ?)";
    db.execute(sql,[name,email],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                message:"Error inserting user"
            });
        }
        console.log("User inserted");
        res.status(201).json({
            message:"User inserted successfully",
            userId:result.insertId
        });
    });
}
// Update User
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const sql= "UPDATE Users SET name = ?, email = ? WHERE id = ?";

    db.execute(sql,[name, email, id],(err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            console.log("User updated");

            res.json({
                message: "User updated successfully"
            });
        }
    );
};

// Delete User
const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql="DELETE FROM Users WHERE id = ?";
    db.execute(sql,[id],(err, result) => {
            if (err) {
                return res.status(500).json({ message: err.message });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "User not found" });
            }

            console.log("User deleted");

            res.json({
                message: "User deleted successfully"
            });
        }
    );
};

module.exports = {
    createUser,
    updateUser,
    deleteUser
};