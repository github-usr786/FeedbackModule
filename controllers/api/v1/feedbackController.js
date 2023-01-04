const UserFeedBack=require('../../../models/feedback');

// controller for register feedback in DB
module.exports.register=function(req,res){

            // creating new entry in DB
            UserFeedBack.create(req.body,function(err,feedback){
                
                if(err){
                    return res.json(400,{
                        message:err
                    });
                }
                else{

                    // returning success message, with basic details after saving feedback in DB
                    return res.status(200).json({
                        message:"User Feedback created Successfully",
                        id:feedback._id,
                    });
            }    
    });
}
    
