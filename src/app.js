import express from 'express';
const app = express();

app.listen(port, ()=>{
    console.log(`The server is running at http://localhost:${port}`);
})