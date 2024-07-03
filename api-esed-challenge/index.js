const express = require('express');
const cors = require('cors');
const { getData } = require('./utils/getData');

const app = express();
const port = 3000;

app.use(cors());
app.get('/', getData);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});