'use strict';
const Post = require('./Post');

class Thread {
    constructor(thread) {
        this.replyCount = thread.posts_count;
        this.post = new Post(thread);
        this.num = this.post.num
    }
}

module.exports = Thread;