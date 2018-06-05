"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./Post");
class Thread {
    constructor(thread) {
        this.replyCount = thread.posts_count;
        this.post = new Post_1.Post(thread);
        this.num = this.post.num;
        this.views = thread.views;
        this.lasthit = thread.lasthit;
        this.timestamp = thread.timestamp;
        this.score = thread.score;
    }
    toString() {
        return `<[${this.num}]: ${this.post.comment}>`;
    }
}
exports.Thread = Thread;
//# sourceMappingURL=C:/Users/faded/Documents/Code/dvach-js/dist/models/Thread.js.map