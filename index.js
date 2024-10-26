import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())

const users = []

app.post("/user", (req , res) =>{
    const {fullname, username, password} = req.body

    users.push({
       fullname: fullname,
       username: username,
       password: password

    }
    )
    
    res.status(200).json({
        message: "frontend connected with backend successfully with status code of 200",
        users

    })
})
app.get('/seeusers', (req, res) => {
    res.send(users)
    
})



app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
