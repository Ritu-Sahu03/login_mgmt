const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user_mgmt')
.then(()=>console.log("Successfully Connected TO DB"))
.catch(err=>console.error("Not able to connect to DB", err))
