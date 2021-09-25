require("dotenv").config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

//Routes
import Auth from './API/Auth/index'

//Database Connection
import ConnectDB from './database/connection'

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(cors());
zomato.use(helmet());

zomato.use("/auth", Auth);

zomato.get("/",(req,res) => {
    res.json({message: "Setup Success"});
});

zomato.listen(4000,() =>
ConnectDB().then(() => console.log('Server is up and running')).catch(() =>console.log('Server is up and running but databse connection failed')));