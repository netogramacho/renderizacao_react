function numAleatorio(min = 1, max = 100000) {
    return parseInt(Math.random() * (max - min) + min)
}

export default function handler(req, res) {
    res.status(200).json([
        { id: numAleatorio(), nome: 'Caneta', preco: 5.6 },
        { id: numAleatorio(), nome: 'Caderno', preco: 15.6 },
        { id: numAleatorio(), nome: 'Borracha', preco: 7.3 },
        { id: numAleatorio(), nome: 'Tesoura', preco: 20.55 },
    ])
}