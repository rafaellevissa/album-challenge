const express = require('express')
const routers = require('./routers')
const app = express()

app.use(express.json());
app.use(routers)

app.listen(3000, () => console.log(`Server running on http://localhost:3000/`))


