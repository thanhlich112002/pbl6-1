import express from "express";
import db from "./Models/Entitys/index.js";
import routerAuth from "./Routes/AuthRoute.js";
import routerBook from "./Routes/BookRoute.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from 'cors'
import routerUser from "./Routes/UserRoute.js";
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const port = process.env.PORT
//Connect database
try {
    await db.sequelize.authenticate();
    console.log('Connection database successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
// await db.sequelize.sync({
//     alter: true,
//     logging : ()=>{}
// }).then(()=>{
//     console.log('Update database success')
// })
//api
app.use('/api/auth', routerAuth)
app.use('/api/book', routerBook)
app.use('/api/user', routerUser)
app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  console.log
  return res.status(errorStatus).send(errorMessage);
})
app.listen(port, ()=>{
    console.log(`Server is listening ${port}`)
})
