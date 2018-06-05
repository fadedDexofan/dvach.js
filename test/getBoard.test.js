const { DvachApi } = require("../dist");

const { expect } = require("chai");

describe("getBoard function test", async () => {
  it("should return board threads", async () => {
    const result = await DvachApi.getBoard("b");
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
  });

  it("should return that board does not exists", async () => {
    try {
      const result = await DvachApi.getBoard("undefined");
    } catch (err) {
      expect(err).to.have.property(
        "message",
        "Request failed with status code 404",
      );
    }
  });
});
