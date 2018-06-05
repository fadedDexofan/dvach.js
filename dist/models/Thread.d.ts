import { Post } from "./Post";
export declare class Thread {
    replyCount: number;
    post: Post;
    num: number;
    views: number;
    lasthit: any;
    timestamp: number;
    score: number;
    constructor(thread: any);
    toString(): string;
}
