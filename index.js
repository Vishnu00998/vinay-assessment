const express=require('express');
const app=express();

app.use(express.json());

app.get("/testbhfl.herokuapp.com/bfhl",(req,res)=>{

    return res.status(200).json({
        "operation-code":1
    })
}
)

app.post("/testbhfl.herokuapp.com/bfhl",(req,res)=>{
    const data=req.body.data;
    let numbers = data.filter(item => !isNaN(item));
let alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
let lowercaseAlphabets = data.filter(item => /^[a-z]+$/.test(item));
let highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
    ? [lowercaseAlphabets.sort().pop()] 
    :[];



    return res.status(200).json({
        "is_success":true,
        "user_id":"john_doe_17091999",
        "email":"john@xyz.com",
        "roll_number":"ABCD123",
        "numbers":numbers,
        "alphabets":alphabets,
        "highest_lowercase_alphabet":highestLowercaseAlphabet
    })
 
})

app.listen(3000);