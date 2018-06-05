const { Post, Thread } = require("./models");

const axios = require("axios");

const baseURL = "https://2ch.hk/";

/**
 * Функция для преобразования массива объектов тредов
 *
 * @param {Array<Object>} threads Объект с тредами
 * @returns {Array<Thread>} Массив тредов
 */
function processThreads(threads) {
  return threads.map((thread) => new Thread(thread));
}

class DvachApi {
  // TODO: Rework all throws to throw something like BoardDoesNotExistError
  /**
   * Метод для получения всех тредов с доски
   *
   * @param {String} board Доска
   * @returns Массив всех тредов доски
   */
  static async getBoard(board = "b") {
    const endpoint = "/threads.json";
    try {
      const resp = await axios.get(baseURL + board + endpoint);
      const threads = processThreads(resp.data.threads);
      return threads;
    } catch (err) {
      return err;
    }
  }

  /**
   * Метод для получения всех тредов доски по странице
   *
   * @param {Number} page Страница
   * @param {*} board Доска
   * @returns Массив тредов страницы
   */
  static async getPage(page = 0, board = "b") {
    const selectedPage = page === 0 ? "index" : page;
    const endpoint = `/${selectedPage}.json`;
    try {
      const resp = await axios.get(baseURL + board + endpoint);
      const threads = processThreads(resp.data.threads);
      return threads;
    } catch (err) {
      return err;
    }
  }

  /**
   * Метод для получения всех постов треда
   *
   * @param {String} board Доска
   * @param {Number} threadNum Номер треда
   * @returns {Promise<Array<Post>>} Массив с постами
   */
  static async getThread(board = "b", threadNum) {
    const endpoint = `/res/${threadNum}.json`;
    try {
      const resp = await axios.get(baseURL + board + endpoint);
      const posts = resp.data.threads[0].posts.map((post) => new Post(post));
      return posts;
    } catch (err) {
      return err;
    }
  }

  /**
   * Метод для получения топа тредов доски
   *
   * @param {String} board Доска
   * @param {String} sortType Метод сортировки (views, posts, score)
   * @param {Number} numOfThreads Количество тредов в топе
   * @returns Массив сортированных тредов доски
   */
  static async getTop(board = "b", sortType = "views", numOfThreads = 5) {
    const endpoint = "/threads.json";
    try {
      const resp = await axios.get(baseURL + board + endpoint);
      const { threads } = resp.data;
      if (sortType === "views") {
        threads.sort((a, b) => b.views - a.views);
      } else if (sortType === "score") {
        threads.sort((a, b) => b.score - a.score);
      } else if (sortType === "posts") {
        threads.sort((a, b) => b.replyCount - a.replyCount);
      } else {
        throw new Error("Wrong sort type");
      }
      const sortedThreads = processThreads(threads.slice(0, numOfThreads));
      return sortedThreads;
    } catch (err) {
      return err;
    }
  }

  constructor(passcode = "") {
    if (passcode) {
      this.passcode = passcode;
    }
  }
}

module.exports = DvachApi;
