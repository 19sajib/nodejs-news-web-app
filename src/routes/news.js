const express = require('express');
const newsRouter = express.Router();
const axios = require('axios');

//const newAPI = `https://newsapi.org/v2/everything?q=tesla&from=2021-08-11&sortBy=publishedAt&apiKey=${process.env.API_KEY}`

newsRouter.get('', async (req, res) => {

    try {
        const newAPI = await axios.get(`https://newsapi.org/v2/everything?language=en&q=xiaomi&from=2021-09-11&sortBy=publishedAt&apiKey=`,{
            language: 'en',
            country: 'uk'
        })
        //console.log(newAPI.data);
        res.render('news', { articles: newAPI.data.articles})
    } catch (error) {
        if(error.response) {
            res.render('news', { articles: null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if(error.request){
            res.render('news', { articles: null})
            console.log(error.request);
        } else {
            res.render('news', { articles: null})
            console.error('Error', error.message)
        }
    }
})


newsRouter.post('', async (req, res) => {
    const search = req.body.search

    try {
        const newAPI = await axios.get(`https://newsapi.org/v2/everything?language=en&q=${search}&from=2021-09-11&sortBy=publishedAt&apiKey=`,{
            language: 'en',
            country: 'uk'
        })
        //console.log(newAPI.data);
        res.render('news', { articles: newAPI.data.articles})
    } catch (error) {
        if(error.response) {
            res.render('news', { articles: null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if(error.request){
            res.render('news', { articles: null})
            console.log(error.request);
        } else {
            res.render('news', { articles: null})
            console.error('Error', error.message)
        }
    }
})


module.exports = newsRouter;
