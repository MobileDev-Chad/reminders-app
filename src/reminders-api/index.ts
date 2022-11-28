import express from "express";
import remindersRouter from './routers/reminder'

const app = express();

// Special middleware to parse incoming request bodies (replaces body parser)
app.use(express.json())

app.use('/reminders', remindersRouter)

app.get('/',(req, res) => {
    res.send('Hello world');
})

app.listen(8000, () => console.log("Server started"));
