const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://eltonsolvencio:<password>@cluster0.xlvkyli.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Database connected");
}).catch((err)=> {
    console.log("Erro ao conectar", err)
});

app.listen(port,() => {
    console.log("Server is running on port: " + port);
});

const User = require("./models/user");
const Order = require("./models/order");

//Funçaõ pra enviar email
const sendVerificationEmail = async(email,verificationToken)=>{
    //create node mailer transport

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user:"eltonsolvencio30@gmail.com",
            pass:"uxge eqlk ptsu pfxl"
        }
    })

    const mailOptions = {
        from: "CyberMarketPlace",
        to:email,
        subject:"Email Verification",
        text:`Clique no link para confirmar o email: http://10.0.2.2:8000/verify/${verificationToken}`,
    };

    //send the email

    try{
        await transporter.sendMail(mailOptions);
    }catch(error){
        console.log("Error sending verificaton email",error);
    }

};
//Nodemailer b

//endpoint to register in the app
app.post("/register", async(req, res) => {
    try{
        const {name, email, password, country} = req.body;
        console.log('Request Headers:', req.headers); 
        console.log('Request Body:', req.body);  // Log para depuração
        //se ja está registado
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message:"Email ja registado"});
        }

        //Criar User
        const newUser = new User({name,email,password,country});

        //Gerando verification Token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");
        console.log("New user:", newUser);
        //save the user to the database
        await newUser.save();

        //Enviando email de verification
        sendVerificationEmail(newUser.email, newUser.verificationToken);
    }catch(error){
        console.log("error registering user", error);
        res.status(500).json({message:"Registration failed"});
    }
});

//endpoint to verify the email

app.get("/verify/:token",async(req,res) => {
    try{
        const token = req.params.token;

        //Find the user with the given verification token
        const user = await User.findOne({verificationToken: token});
        if(!user){
            return res.status(404).json({message:"Invalid verification token"})
        }
        user.verified = true;
        user.verificationToken = undefined;
        
        await user.save();
        res.status(200).json({message:"Verificação bem sucedida"});
    }catch(error){
        res.status(500).json({message:"Verificação do email falhou"});

    }
});

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
}

const secretKey = generateSecretKey();
//endpoint to login the user
app.post("/login",async(req,res) => {
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Email ou password invalido"});
        }
        if(user.password !== password){
            return res.status(401).json({message:"Invalid password"});
        }

        const token = jwt.sign({userId:user._id}, secretKey);
        
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({message:"Login Failed"});
    }
})
