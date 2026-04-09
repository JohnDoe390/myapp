require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/health', (req, res) => {
//  res.status(200).json({ status: "UP" });
});

ap..p.get('/', (req, res) => {
  res.status(200).json({ Message: "Hello from World" });
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening to port ${port}`);
});
