const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const colors = require('colors');
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}.`);
});
