const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "bus_booking"
});

db.connect((err) => {
    if (err) throw err;

    console.log("Connected to MySQL");

    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        );
    `;

    db.execute(createUsersTable, (err) => {
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

    db.execute(createBusesTable, (err) => {
        if (err) throw err;
        console.log("Buses table created");
    });

    const createBookingsTable = `
CREATE TABLE IF NOT EXISTS Bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT
);
`;

db.execute(createBookingsTable, (err) => {
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

db.execute(createPaymentsTable, (err) => {
    if (err) throw err;
    console.log("Payments table created");
});
});

module.exports = db;