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
        const oldarticles = articles
        $('.REPEATERROW', html).each(function (i) {
            const text = $(this).text()
            articles.push({ i , text })
            if(articles[i] == oldarticles[i]){
                console.log('no hubieron Cambios')
            }else{
                console.log('Existen Cambios ' , URLONE);
            }
        })
        console.log(articles , oldarticles.length)
    }).catch(err => console.log(err, 'error al intentar Ingresar a la web'))

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))