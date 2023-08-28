const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    res.send("Test App")
});

app.get('/api', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 40,
    job: 'Software Engineer',
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});