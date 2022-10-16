class StudetController{
    // static get_session_info = ((req,res)=>{
    //     console.log(req.session);
    //     console.log(req.session.id);
    //     console.log(req.session.cookie);
    //     console.log(req.session.cookie.maxAge);
    //     console.log(req.session.cookie.originalmaxAge);
    //     res.send("<h2>session info -------->>>></h2>");
    // })
    // static regn_session = (req,res)=>{
    //  req.session.regenerate(()=>{
    //     console.log(`Session Regenerated........ New Session ID \n ${req.session.id}`);
    //  })
    //  res.send(`Session Regenerated...`)

    // }
    // static delete_session = (req,res)=>{
    //      req.session.destroy(()=>{
    //         console.log(`--------session destroyed-------- `);
    //      })
    //      res.send("OK")
    // }
    static session_example= (req,res)=>{
        req.session.device ="Mobile";
        if(req.session.count){
            req.session.count++;
        }else{
            req.session.count= 1;
        }
        res.send(`Count :${req.session.count}`)
    }
    static get_session_data = (req,res)=>{
        if( req.session.device){
            res.send(`Device : ${ req.session.device} count:${ req.session.count}`)
        }else{
            res.send(`Session Data Device not found`);
        }
    }
}
export default StudetController;