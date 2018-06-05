const DvachApi = require("../");

const { expect } = require("chai");

describe("getBoard function test", async () => {
  it("should return board threads", async () => {
    const result = await DvachApi.getBoard("b");
    expect(result);
    expect(result).to.be.an("array");
    expect(result[0]).to.have.all.keys(
      "lasthit",
      "num",
      "replyCount",
      "score",
      "post",
      "timestamp",
      "views",
    );
    expect(result[0].post).to.have.all.keys(
      "comment",
      "subject",
      "num",
      "number",
      "parent",
      "closed",
      "banned",
      "date",
      "email",
      "endless",
      "files",
      "lasthit",
      "name",
      "op",
      "sticky",
      "tags",
      "timestamp",
      "trip",
    );

    expect(result[0].toString()).to.be.equals(`<[${result[0].num}]: ${result[0].post.comment}>`);
  });

  it("should return that board does not exists", async () => {
    try {
      const ignoredResult = await DvachApi.getBoard("undefined");
    } catch (err) {
      expect(err).to.have.property("message", "Request failed with status code 404");
    }
  });
});
