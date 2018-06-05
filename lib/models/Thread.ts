import { Post } from "./Post";

export class Thread {
  replyCount: number;
  post: Post;
  num: number;
  views: number;
  lasthit: any;
  timestamp: number;
  score: number;

  constructor(thread: any) {
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
