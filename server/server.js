const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
    res.json({'users': ['userOne', 'userTwo', 'userThree', 'userFour']})
})
app.listen(port, () => {
    console.log('server listening at port: ', port)
})