const express = require('express');
require('./db/config');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

const empInfo = require('./db/schemas/employee');

app.post('/setEmpInfo', async(req, res)=>{
    const empDetail = new empInfo(req.body);
    let result = await empDetail.save();
    res.json(result);
})

app.listen(port, () => {
    console.log(`Employee app listening at http://localhost:${port}`);
  });