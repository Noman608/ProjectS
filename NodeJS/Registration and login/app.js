import express from "express";
import authRoute from "./routes/auth-routes.js";
const app = express();
const port = process.env.PORT || 3000;


//setup the Templat5e Engine to use 
app.set('view engine','ejs');

//set up routers
app.use('/auth',authRoute);
 

//create home route
app.get('/',(req,res)=>{
  res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  