require('./config/config');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello World')
});

app.get('/usuario/:id', function(req, res) {
    let id = req.params.id;
    //res.send('get usuario');
    res.json({
        id: id
    })

});

app.post('/usuario', function(req, res) {

    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        });
    } else {
        res.json({
            body
        });
    }

})

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto 3000');
})