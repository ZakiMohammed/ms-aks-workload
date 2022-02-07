const express = require('express')
const axios = require('axios').default

const router = express.Router()

router.post('/', async (req, res) => {
    const url = req.body.url || process.env.REMOTE_API

    try {
        const response = await axios.get(url)
        const data = response.data

        res.json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
