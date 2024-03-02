const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'register'
})

app.post('/register',(req,res)=>{
    const sql = "INSERT INTO register_table (username,email,password) values (?,?,?)"
    const username=req.body[0]
    const email=req.body[1]
    const password=req.body[2]
    values=[username,email,password]
    console.log(values)

    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        return res.json(data)
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT `username`,`password` FROM register_table WHERE `email`=? AND `password`=? "
    const values =[
        emailLogin=req.body[0],
        passwordLogin=req.body[1]
    ]
    db.query(sql,(values),(err,data)=>{
        if(err){ 
            console.log(err)
            return res.json(err)
        }
        if(data.length>0)
        {
            return res.json('Success')
        }
        else{
            return res.json('Fail')
        }
    })
})

app.post('/Education1',(req,res)=>{
    const sql="INSERT INTO education (`name`,`email`,`phone`,`donated`,`place`,`address`)  values (?,?,?,?,?,?)"
    const values = [ 
        name=req.body[0],
        email=req.body[1],
        phone=req.body[2],
        donated=req.body[3],
        place=req.body[4],
        address=req.body[5]
    ]
    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        console.log(data)
    })
})


app.post('/FoodBank1',(req,res)=>{
    const sql="INSERT INTO food_donation (`name`,`email`,`phone`,`type`,`quantity`,`place`,`address`)  values (?,?,?,?,?,?,?)"
    const values = [ 
        name=req.body[0],
        email=req.body[1],
        phone=req.body[2],
        type=req.body[3],
        quantity=req.body[4],
        place=req.body[5],
        address=req.body[6]
    ]
    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        console.log(data)
    })
})  

app.post('/socialWelfare1',(req,res)=>{
    const sql="INSERT INTO social_welfare (`name`,`email`,`phone`,`donate`,`place`,`address`)  values (?,?,?,?,?,?)"
    const values = [ 
        name=req.body[0],
        email=req.body[1],
        phone=req.body[2],
        donated=req.body[3],
        place=req.body[4],
        address=req.body[5]
    ]
    console.log(values)
    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        console.log(data)
    })
})

app.post('/volunteer1',(req,res)=>{
    const sql="INSERT INTO volunteer (`name`,`email`,`phone`,`skill`,`place`,`address`)  values (?,?,?,?,?,?)"
    const values = [ 
        name=req.body[0],
        email=req.body[1],
        phone=req.body[2],
        skill=req.body[3],
        place=req.body[4],
        address=req.body[5]
    ]
    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        console.log(data)
    })
})


app.listen(3001,()=>{
    console.log("Backend Connected...")
})