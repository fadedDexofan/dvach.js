export class Post {
  banned: number;
  closed: number;
  comment: string;
  date: string;
  email: string;
  endless: number;
  files: any;
  lasthit: number;
  name: string;
  num: number;
  number: number;
  op: number;
  parent: string;
  sticky: number;
  subject: string;
  tags: string;
  timestamp: number;
  trip: string;

  constructor(post: any) {
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
    this.trip = post.trip;
  }

  toString() {
    return `<[${this.num}]: ${this.comment}>`;
  }
}
