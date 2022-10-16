import express from "express";
const router  = express.Router();

//auth login
router.get('/login',(req,res)=>{
    res.render('login');
});

//auth logout
router.get('/logout',(req,res)=>{
    //handel with passport
    res.send('logging out');
});

//auth with google
router.get('/google',(req,res)=>{
    //handel with passport
    res.send('Logging in wiht google');
});

export default router;