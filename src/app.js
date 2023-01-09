const express = require('express')
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors());
const port = 5000

/* let usuarios = []
let tweets = [] */

let usuarios = [{
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}, {
    username: "stich",
    avatar: "https://img.elo7.com.br/product/main/2D8E310/bordado-matriz-disney-stitch-desenho-animado-stitch-desenho-animado.jpg"
}]

let tweets = [{
    username: "bobesponja",
    tweet: "eu amo o hub"
}, {
    username: "stich",
    tweet: "eu amo o hub"
}]

app.post('/sign-up', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send("OK");
});