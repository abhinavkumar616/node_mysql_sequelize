const Customer = require('../models/userModel');

const customerController = async (req, res) => {
    console.log("Controller is called");
    try {
        const { name, email, age } = req.body;

        // Check if email already exists
        const existingCustomer = await Customer.findOne({ where: { email } });
        if (existingCustomer) {
            return res.status(409).json({ message: "Duplicate email not allowed" });
        }

        // Create new customer
        const newCustomer = await Customer.create({ name, email, age });

        // Respond with the newly created customer data
        return res.status(201).json({ data: newCustomer });
    } catch (error) {
        console.error("Error in customerController:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = customerController;

