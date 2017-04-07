const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

// Указываем Express где находится папка public
app.use(express.static(path.join(__dirname, 'public')));

// На все GET-запросы отправлять index.html
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
    console.log('Express слушает по адресу localhost:' + PORT)
});