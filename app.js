// let http = require('http');

// http.createServer(function(req, res) {

//     res.writeHead(200, {'Content-Type': 'text/plain'})

//     res.end('Prueba')



// }).listen(3030, 'localhost')

const express = require('express');
const app = express();
const heroes = require ('./heroes.json')

app.get('/', (req, res) => {
    res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
 })
 app.get('/heroes', (req, res) => {
    res.send(heroes);
 })

 app.get('/heroes/detalle/:id', (req, res) => {
    let heroe = heroes.find(element => element.id == req.params.id);
    if(req.params.id <= heroes.length){
    res.send(
        `Hola, mi nombre es ${heroe.nombre} y mi profesion es ${heroe.profesion}
        `);
    }else {
        res.send("El heroe solicitado no fue encontrado");
    }
    res.send(heroes);
 })

 app.get('/heroes/bio/:id/:ok?', (req, res) => {
    let hereoOK = req.params.ok;
        let heroeID = heroes.find(heroe => {
            return heroe.id == req.params.id;
        })
        if(heroeID == null ){
            res.send(`no existe heroes con el id numero ${req.params.id}`)
        }
        if(hereoOK == null){
            res.send(`HOLA, mi nombre es ${heroeID.nombre}, Lamento que no desees saber más de mi :(`);
        }
        if(hereoOK == "ok"){
            res.send(`${heroeID.nombre} ${heroeID.resenia}`);
       }

    res.send(heroes);
})
app.get('/creditos', (req, res) => {
    res.send("Creditos a Eduardo Mijares");
 })
 app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});



 app.listen(3000, () => console.log('Heroes'));