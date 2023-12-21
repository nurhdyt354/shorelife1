require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(
  "mongodb+srv://dbFish:dbFishPassword@atlascluster.jmvsnrd.mongodb.net/", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to DB');
}).catch((err) => {
  console.error('Connection error:', err);
});
                      
const FishRouter = require('./routes/Fish')
app.use('/Fish', FishRouter)

app.listen(3000, () => console.log('Server Started'))
