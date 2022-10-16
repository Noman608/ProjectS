import express from "express";
import session from 'express-session'
import './models/student.js'
import MongoStore from 'connect-mongo'
const app = express();
const port = process.env.PORT || 3000;
import web from "./routes/web.js";
import connectDB from "./db/connectdb.js"
const databaseURL = process.env.DATABASE_URL ||"mongodb://localhost:27017/schooldb";

connectDB(databaseURL);

//MongoDb session
const sessionStorage = MongoStore.create({
  mongoUrl:databaseURL,
  dbName:'schooldb',
  collectionName:'sessions',
  ttl:14*24*60*60,
  autoRemove:'native'
})

app.use(
  session({
    name:"NomanSession",
    secret: "iamkey",  
    resave: false,
    saveUninitialized: true,
    cookie:{maxAge:100000},
    store:sessionStorage
  })
);
app.use("/", web);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


