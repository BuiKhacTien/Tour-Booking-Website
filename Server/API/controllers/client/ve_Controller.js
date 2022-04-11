const Ve = require('../../models/ve')

module.exports.bookTour = async(req, res) => {
    const id = req.params.id
    const ve = await Ve.findById(id)
    sum = parseInt(req.body.SLNL);
    sumkid = parseInt(req.body.SLTE);
    ve.ctve.map(item=>{
        sum += parseInt(item.SLNL)
        sumkid += parseInt(item.SLTE)
    })
    if(sum > parseInt(ve.quantity) || sumkid > parseInt(ve.quantity_kid)){
        return res.json({msg:'Full'})
    }  
    
    const newCTVe = {
        SLNL : req.body.SLNL,
        SLTE : req.body.SLTE,
        khachhang_id: req.body.khachhang_id
    }
    
    await Ve.findByIdAndUpdate(id,{
        $push:{
            ctve:newCTVe
        }
    })

    return res.json({msg:'Booking success'})

}

module.exports.deleteTour = async(req, res) => {
    const id = req.params.id
    const khachhang_id = req.body.khachhang_id
    await Ve.findByIdAndUpdate(id,{
        $pull:{
            ctve:{
                khachhang_id:khachhang_id
            }
        }
    })
    return res.json({msg:'Delete success'})
}