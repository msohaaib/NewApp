const express = require('express');
const app = express();

app.use(express.json());

let attendance = [];

app.post('/attendance', (req, res) => {
  attendance.push(req.body);
  res.send('Attendance saved!');
});

app.get('/attendance', (req, res) => {
  res.json(attendance);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
