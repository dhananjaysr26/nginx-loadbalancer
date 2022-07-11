const express = require('express');
const app = express();
const port = 5001

app.get('/', (req, res) => {
    res.send(`Hello from Server 1!`);
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})