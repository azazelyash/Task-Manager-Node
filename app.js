const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Task Manager');
});

const port = 3000;

app.listen(port, console.log(`Server started on port ${port}`));