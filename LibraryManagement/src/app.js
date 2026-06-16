const express = require('express');
const { connectDB } = require('./config/database.js');
require('./models/index.js');
const ErrorHandler = require('./middleware/errorHandler.js');
const Routes = require('./routes/index.js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', Routes);

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server Started');
    });
});
app.use(ErrorHandler);
module.exports = app;
