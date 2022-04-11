var nhanviendb=require('../../models/nhanvien')

exports.login = async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await nhanviendb.findOne({username:username})
    
    if(user === null){
        res.send("Failed")
    }else{
        if(user.password===password)
            res.json(user)
        else
            res.send("Login Failed")
    }
}

exports.create=async(req,res)=>{
    if(!req.body){
        res.status('400').send({message:'Cannot empty'});
    }
    const username=req.body.username
    const email= req.body.email
    var nv=new nhanviendb({
        name: req.body.name,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        identity: req.body.identity,
        address: req.body.address,
        chucvu_id:req.body.chucvu_id,
        username: req.body.username,
        password: req.body.password
    })
    const checkUser = await nhanviendb.findOne({username: username})
    const checkMail = await nhanviendb.findOne({email: email})
    if(checkUser||checkMail){
        res.json({msg:'Tài khoản hoặc email đã tồn tại'})
    }else{
        nv.save(nv).then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({
                message:err.message|| "Some error occurred while creating a create operation"
            });
        })
    }
}

exports.find=(req,res)=>{
    if(req.query.id)
    {
        const id=req.query.id;
        nhanviendb.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found nhan vien with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving nhan vien with id'});
        })
    }
    else{
        nhanviendb.find().then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving tour information'});
        })
    }

}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Connect can be empty"});
    }
    const id=req.params.id;
    nhanviendb.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:err.message
            })}
        else {res.send(data);}
    }).catch(err=>{
        res.status(500).send({
            message:err.message|| "Some error occurred"
    })})
}

exports.delete=(req,res)=>{
    const id=req.params.id
    nhanviendb.findByIdAndDelete(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:err.message
            })}
        else {res.send({message:"Successfully"});}
        })
}