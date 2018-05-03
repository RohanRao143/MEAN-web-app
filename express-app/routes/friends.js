const Friend = require('../models/Friends');

// fetches all friends

exports.getFriends = (req,res)=>{
    console.log('yeah there!')
    Friend.find({},(err,friends)=>{
        return res.status(200).send(friends)
    })
}

// creates a friend

exports.createFriend = (req,res)=>{
    Friend.find({name:req.body.name},(err,friend)=>{
        if(friend.length){
            return res.json({result:'friend already exists!'})
        }
        var friend = new Friend(req.body);
        friend.save(err=>{
            if(err){
                return res.status(500).send(err); 
            }
            return res.status(200).send(friend)
        })
    }).limit(1)
}

// delete a friend by id

exports.deleteFriend = (req,res)=>{
    Friend.findOneAndRemove({id:req.params.id},(err,friend)=>{
        if(err){
            res.status(500).send('deletion process si unsuccessfull');
        }
        return res.status(200).send('Succesfully deleted.')             
    })
}

//Update a friend by id

exports.updateFriend = (req,res)=>{
    Friend.findOneAndUpdate({id:req.params.id},{name:req.body.name,hobbies:req.body.hobbies,number:req.body.number},
        (err,friend)=>{
            if(err){
                return res.status(500).send('cannot update the friend due to some internal server error!!!')
            }
            res.status(200).send('Updated the friend successfully')
        })
}
