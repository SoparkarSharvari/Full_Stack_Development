const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// const uri = 'mongodb://127.0.0.1:27017/customers';
mongoose.connect("mongodb://0.0.0.0:27017/mydatabase1")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully!!!')
});

const customerRouter = require('./routes/customers');

app.use('/customers', customerRouter);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})