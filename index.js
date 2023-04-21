const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const path = require('path');


app.use(express.json());
app.use(cors());

app.use('/', require('./routes/app.route'));

// app.get('/**', (req, res) => {
//     return res.json({
//         status: 400,
//         message: 'not found'
//     })
// })


// // Deployment :
app.use(express.static(path.resolve(__dirname, './www')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './www', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})