'use strict';
let api = require('./dvach');

api.getBoard('pr')
    .then(threads => {
        for (let thread of threads) {
            api.getThread('pr', thread.num)
                .then(posts => {
                    for (let post of posts) {
                        let findInComment = post.comment.toLowerCase().includes('javascript');
                        if (findInComment) {
                            console.log(post.comment)
                        }
                    }
                })
        }
    });
