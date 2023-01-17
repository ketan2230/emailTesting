const express = require('express');
const taskRoutes = require('./routes/task')
const { request, response } = require('express');

const app = express()
const PORT = process.env.port || 3022

app.use(express.json())
app.use('/mail',taskRoutes)

app.use((request, response) => {
    response.status(404);
    response.json({message:"Resource not found"});
})

app.use((request, response) => {
    response.status(500);
    response.json({message:"Oops... Something not found"});
})

app.listen(PORT, async ()=>{
    console.log(`App is runnig on http://localhost:${PORT}`);
})