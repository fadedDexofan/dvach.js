import { Thread } from "./models";
export declare class DvachApi {
    static getBoard(board?: string): Promise<Thread[] | undefined>;
    static getPage(page?: number, board?: string): Promise<Thread[]>;
    static getThread(board: string, threadNum: number): Promise<any>;
    static getTop(board?: string, sortType?: string, numOfThreads?: number): Promise<Thread[]>;
    passcode?: string;
    constructor(passcode?: string);
}
