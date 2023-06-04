const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongo:UiTcspdukcFR3sjD3Dg3@containers-us-west-155.railway.app:5837');
        console.log("Database Connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}


app.listen(port, host, async (err) => {
    console.log(`Server Running at http://${host}:${port}`);
    connectDB();
})