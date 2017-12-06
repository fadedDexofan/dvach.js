'use strict';
const axios = require('axios');
const baseURL = 'https://2ch.hk/';
const Thread = require('./api/Thread');
const Post = require('./api/Post');

const getBoard = async (board = 'b') => {
    const endpoint = '/threads.json';
    try {
        const response = await axios.get(baseURL + board + endpoint);
        let threads = [];
        for (let thread of response.data.threads) {
            threads.push(new Thread(thread))
        }
        return threads;
    } catch (err) {
        throw new Error(err);
    }
};

const getThread = async (board, thread_num) => {
    const endpoint = `/res/${thread_num}.json`;
    try {
        const response = await axios.get(baseURL + board + endpoint);
        let posts = [];
        for (let post of response.data.threads[0].posts) {
            posts.push(new Post(post))
        }
        return posts
    } catch (err) {
        throw new Error(err)
    }
};

getBoard('pr')
    .then(board => {
        console.log(board)
    });

getThread('abu', 42375)
    .then(posts => {
        console.log(posts)
    });
