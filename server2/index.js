const express = require('express');
const app = express();
const port = 5002

app.get('/', (req, res) => {
    res.send(`Hello from Server 2!`);
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})