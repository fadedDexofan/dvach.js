const DvachApi = require("../");

const { expect } = require("chai");

describe("getPage function test", async () => {
  it("should return page with threads", async () => {
    const result = await DvachApi.getPage(0, "b");
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
  });

  it("should return that page does not exists", async () => {
    try {
      const ignoredResult = await DvachApi.getPage(50, "b");
    } catch (err) {
      expect(err).to.have.property("message", "Request failed with status code 404");
    }
  });
});
