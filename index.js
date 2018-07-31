const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use((req, res, next) => {
  console.log(req.body, req.path);
  next();
});


app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
