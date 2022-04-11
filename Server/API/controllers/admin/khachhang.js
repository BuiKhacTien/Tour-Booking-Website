var khachhangdb=require('../../models/khachhang')



exports.find=(req,res)=>{
    if(req.query.id)
    {
        const id=req.query.id;
        khachhangdb.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found khach hang with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving khach hang with id'});
        })
    }
    else{
        khachhangdb.find().then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving khach hang information'});
        })
    }

}

