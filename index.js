const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Hello from <Sowmya Sree>'s Web App");
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
