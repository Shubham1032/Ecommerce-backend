const express = require('express');
const app = express();
const cors = require('cors')
const Connection = require('./database/database')
const route = require('./routes/route');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const PORT=4040;

app.use(morgan('dev'))
app.use(cors({origin:"*"}));
app.use(bodyParser.json())
app.use(route)
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    Connection()
})