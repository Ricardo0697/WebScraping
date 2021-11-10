const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()
const URLONE = 'https://www.cso.go.cr/legislacion/criterios_tecnicos.aspx';
axios(URLONE)
    .then(response => {
        const html = response.data
        //    console.log(html)
        const $ = cheerio.load(html)
        const articles = []
        $('.REPEATERROW', html).each(function () {
            const text = $(this).text()
            // const tag = $(this).find('tr').attr()
            articles.push({ text })
        })
        console.log(articles , articles.length)
    }).catch(err => console.log(err, 'error al intentar Ingresar a la web'))

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))