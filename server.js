const express = require('express');
const app = express();

app.get('/juice', (req, res) => {
  const juices = ['🍎 Apple Juice', '🥭 Mango Juice', '🍊 Orange Juice'];
  const randomJuice = juices[Math.floor(Math.random() * juices.length)];
  res.json({ drink: `Here’s your drink: ${randomJuice}` });
});

app.listen(3000, () => console.log('Juice shop open on http://localhost:3000'));
