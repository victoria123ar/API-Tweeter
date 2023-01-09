const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = 5000;

let usuarios = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("OK");
});

app.post('/tweets', (req, res) => {
    const tweet = req.body;
    if (!usuarios.find(i => i.username === tweet.username)) {
        res.send("UNAUTHORIZED");
    }
    tweets.push(tweet);
    res.send("OK");
});

app.get('/tweets', (req, res) => {
    let novoArray = [];
    let partida = 0;

    if (tweets.length > 10) {
        partida = tweets.length - 10;
    }

    let contador = 0;
    tweets.forEach(tweet => {
        contador++;
        if (partida >= contador) { console.log(contador) }
        
        else {
            let array = usuarios.find(i => i.username == tweet.username);
            novoArray.push({ username: tweet.username, avatar: array.avatar, tweet: tweet.tweet })
        }
    })

    res.send(novoArray)
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})