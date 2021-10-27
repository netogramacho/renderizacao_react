export default function handler(req, res) {
    const id = +req.query.id
    res.status(200).json({
        id,
        nome: `Paulo Gramacho ${id}`,
        email: `neto.paulo.po${id}@gmail.com`
    })
}