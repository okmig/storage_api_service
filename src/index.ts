import express from "express"
const connect = require('./db/connect');
import userRouter from "./routes/users";
// import { v1 } from "./routes/v1";


const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', userRouter);

app.get('/hello', (req, res) => {res.send('Hello app!')});

const start = async () => {
    try {
        await connect()
        .then(() => {
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        });
    } catch (error) {
        console.log('Something went wrong', error);
    }
}

start();

