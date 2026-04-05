require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
