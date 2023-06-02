//ctrl+shift+b to compile and run the watch mode
//require built-in modules
import express from 'express';

const app = express(); //create a new express application
const port = 3000;

app.get('/', (req, res) => {// '/' default route
  res.send('Hello World!')
})

//listener - similar to server.listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})