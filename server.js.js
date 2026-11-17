const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ROTA QUE FALTAVA /api/criar‑pix
app.post('/api/criar‑pix', (req, res) => {
    const dadosRecebidos = req.body;
    console.log("Dados recebidos:", dadosRecebidos);

    // AQUI DEPOIS COLOCAMOS A CHAMADA REAL PARA A SEDEPAY
    res.json({
        qrCodeText: "PIX‑CODIGO‑DE‑TESTE‑123456",
        id: "PIX‑001"
    })
})

app.get('/', (req, res) => {
    res.send('✅ Servidor Driver Expert está rodando!');
});

app.listen(PORT, () => {
    console.log(Servidor rodando na porta ${PORT});
});
