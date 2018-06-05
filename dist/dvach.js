"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const axios_1 = __importDefault(require("axios"));
const baseURL = "https://2ch.hk/";
function processThreads(threads) {
    return threads.map((thread) => new models_1.Thread(thread));
}
class DvachApi {
    static getBoard(board = "b") {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = "/threads.json";
            try {
                const resp = yield axios_1.default.get(baseURL + board + endpoint);
                const threads = processThreads(resp.data.threads);
                return threads;
            }
            catch (err) {
                return;
            }
        });
    }
    static getPage(page = 0, board = "b") {
        return __awaiter(this, void 0, void 0, function* () {
            const selectedPage = page === 0 ? "index" : page;
            const endpoint = `/${selectedPage}.json`;
            try {
                const resp = yield axios_1.default.get(baseURL + board + endpoint);
                const threads = processThreads(resp.data.threads);
                return threads;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    static getThread(board, threadNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = `/res/${threadNum}.json`;
            try {
                const resp = yield axios_1.default.get(baseURL + board + endpoint);
                const posts = resp.data.threads[0].posts.map((post) => new models_1.Post(post));
                return posts;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    static getTop(board = "b", sortType = "views", numOfThreads = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            const endpoint = "/threads.json";
            try {
                const resp = yield axios_1.default.get(baseURL + board + endpoint);
                const { threads } = resp.data;
                if (sortType === "views") {
                    threads.sort((a, b) => b.views - a.views);
                }
                else if (sortType === "score") {
                    threads.sort((a, b) => b.score - a.score);
                }
                else if (sortType === "posts") {
                    threads.sort((a, b) => b.replyCount - a.replyCount);
                }
                const sortedThreads = processThreads(threads.slice(0, numOfThreads));
                return sortedThreads;
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
    constructor(passcode) {
        if (passcode) {
            this.passcode = passcode;
        }
    }
}
exports.DvachApi = DvachApi;
//# sourceMappingURL=C:/Users/faded/Documents/Code/dvach-js/dist/dvach.js.map