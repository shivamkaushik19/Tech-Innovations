
const Contactusmodel = require("../model/landingpagecontactus");


const todopost = async (req, res) => { 
    try {
        // Extracting user_data from the request body
        const { user_data } = req.body;
        console.log(user_data)

        // Checking if user_data is present in the request body
        if (!user_data) {
            // Sending a response with status 500 and a message if user_data is not found
            return res.status(500).send({ "message": "data is not found" });
        }

        // Creating a new instance of TodoModel with the provided user_data
        const data = new TodoModel({
            user_data
        });

        // Saving the new Todo item to the database
        await data.save();

        // Sending a success response with status 201 and the saved data
        res.status(201).send({ "message": "Todo created successfully", data });

    } catch (err) {
        // Logging any errors that occur during the process
        console.log(err);
        // Sending a response with status 500 and an error message if an exception occurs
        res.status(500).send({ "message": "Internal Server Error" });
    }
};

// Exporting the todopost function to be used in other parts of the application
module.exports = todopost;
