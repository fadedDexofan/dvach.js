const Post = require("./Post");

class Thread {
  constructor(thread) {
    this.replyCount = thread.posts_count;
    this.post = new Post(thread);
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

module.exports = Thread;
