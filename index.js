import express from 'express';
import cors from 'cors';


const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())

app.post("/user", (req , res) =>{
    console.log(req.body);
    res.status(200).json({
        message: "frontend connected with backend successfully with status code of 200"

    })
})



app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
