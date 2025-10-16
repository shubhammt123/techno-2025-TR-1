const User = require("../model/user");

const login = async (req,res)=>{
    try {
        const {email , password}   = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).send({error : "User not found"});

        if(password !== user.password) return res.status(401).send({error : "Invalid Password"});

        res.status(200).send({message : "Login Successful" , user : {firstName : user.firstName , lastName : user.lastName , email : user.email , role : user.role}});
    } catch (error) {
        res.status(500).send({error : "Error login user"});
    }
}

const  signup = async (req,res)=>{
    const {email } = req.body;
    try {
        const user = await User.findOne({email});
        if(user) return res.status(400).send({error : "User Already exist"});
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({message : "User Created"});
    } catch (error) {
        res.status(500).send({error : "Error creating account"});
    }

}

module.exports = {login , signup}