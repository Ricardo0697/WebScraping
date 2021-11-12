const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const {Builder, By, Key, until} = require('selenium-webdriver');

const app = express()
const URLONE = 'https://www.cso.go.cr/legislacion/criterios_tecnicos.aspx';
const URLTWO = 'https://www.cso.go.cr/legislacion/directrices.aspx'
axios(URLONE)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        const oldarticles = articles
        $('.REPEATERROW', html).each(function (i) {
            const text = $(this).text()
            articles.push({ i , text })
            if(articles[i] == oldarticles[i]){
                console.log('no hubo Cambios')
            }else{
                console.log('Existen Cambios ' , URLONE);
            }
        })
        console.log(articles , oldarticles.length)
    }).catch(err => console.log(err, 'error al intentar Ingresar a la web'))
axios(URLTWO).then(response => {
    const html = response.data 
    const $ = cheerio.load(html)
    const articles = []

    const oldarticles = articles
    $('.REPEATERROW' , html).each( function(i){
        const text = $(this).text()
            articles.push({ i , text })
            if(articles[i] == oldarticles[i]){
                console.log('no hubieron Cambios')
            }else{
                console.log('Existen Cambios ' , URLONE);
            }
    })
    console.log(articles , oldarticles.length);
}).catch(err => console.log(err, 'error al intentar Ingresar a la web') )
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))



// (async () => {
//         let driver = await new Builder().forBrowser('firefox').build()
//         try {
//             await driver.get('http://www.google.com/ncr')
//             await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
//             await driver.wait(until.titleIs('webdriver - Google Search'), 1000)
//         } finally {
//             await driver.quit()
//         }
//     })();