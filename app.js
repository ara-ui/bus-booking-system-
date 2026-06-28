const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Bus Booking System API");
});

const createUsersTable = `
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
);
`;

db.query(createUsersTable, (err) => {
    if (err) throw err;
    console.log("Users table created");
});

const createBusesTable = `
CREATE TABLE IF NOT EXISTS Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(255),
    totalSeats INT,
    availableSeats INT
);
`;

db.query(createBusesTable, (err) => {
    if (err) throw err;
    console.log("Buses table created");
});

const createBookingsTable = `
CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
);
`;

db.query(createBookingsTable, (err) => {
    if (err) throw err;
    console.log("Bookings table created");
});

const createPaymentsTable = `
CREATE TABLE IF NOT EXISTS Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid DECIMAL(10,2),
    paymentStatus VARCHAR(50)
);
`;

db.query(createPaymentsTable, (err) => {
    if (err) throw err;
    console.log("Payments table created");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});