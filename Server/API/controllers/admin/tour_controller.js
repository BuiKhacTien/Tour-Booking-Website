
const Tour = require('../../models/tour')

exports.create=async(req,res)=>{
    if(!req.body){
        res.status('400').send({message:'Cannot empty'});
    }
    const name=req.body.name
    var tour=new Tour({
        name: req.body.name,
        itinerary: req.body.itinerary,
        price:req.body.name.price,
        price_kid:req.body.price_kid,
        description: req.body.description,
        service: req.body.service,
        img: req.body.img,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
    })
    const checkName = await Tour.findOne({name: name})
    if(checkName){
        res.json({msg:'Tour is exits'})
    }else{
        tour.save(tour).then(data=>{
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
        Tour.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found nhan vien with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving tour with id'});
        })
    }
    else{
        Tour.find().then(data=>{
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
    Tour.findByIdAndUpdate(id,req.body).then(data=>{
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
    Tour.findByIdAndDelete(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:err.message
            })}
        else {res.send({message:"Successfully"});}
        })
}

