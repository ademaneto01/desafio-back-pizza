const express = require('express')
const router = express()
const api = require('./servico/axios')

async function envioMensagem(req, res) {
    const { id, message } = req.body
    try {
        const mensagem = await api.post('', { id, message });
        return res.json(mensagem.data)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

router.post('/envioMensagem', envioMensagem)

module.exports = envioMensagem