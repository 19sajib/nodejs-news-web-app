const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

//const newAPI = `https://newsapi.org/v2/everything?q=tesla&from=2021-08-11&sortBy=publishedAt&apiKey=${process.env.API_KEY}`

newsRouter.get('', async (req, res) => {

    try {
        const newAPI = await axios.get(`https://newsapi.org/v2/everything?language=en&q=ronaldo&from=2021-08-11&sortBy=publishedAt&apiKey=fd35c208bb994c409f81d5b0fab128d6`,{
            language: 'en',
            country: 'uk'
        })
        console.log(newAPI.data);
        res.render('news', { articles: newAPI.data.articles})
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if(error.request){
            console.log(error.request);
        } else {
            console.error('Error', error.message)
        }
    }
})

module.exports = newsRouter;
