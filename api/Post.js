'use strict';

class Post {
    constructor(post) {
        this.banned = post.banned;
        this.closed = post.closed;
        this.comment = post.comment;
        this.date = post.date;
        this.email = post.email;
        this.endless = post.endless;
        this.files = post.files;
        this.lasthit = post.lasthit;
        this.name = post.name;
        this.num = post.num;
        this.number = post.number;
        this.op = post.op;
        this.parent = post.parent;
        this.sticky = post.sticky;
        this.subject = post.subject;
        this.tags = post.tags;
        this.timestamp = post.timestamp;
        this.trip = post.trip
    }
}

module.exports = Post;
