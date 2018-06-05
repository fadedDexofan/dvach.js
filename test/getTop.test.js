const DvachApi = require("../");

const { expect } = require("chai");

describe("getTop function test", async () => {
  it("should return top of threads by views", async () => {
    const top = await DvachApi.getTop("b", "views", 5);
    expect(top);
    expect(top).to.be.an("array");
    expect(top.length).to.equal(5);
  });

  it("should return top of threads by score", async () => {
    const top = await DvachApi.getTop("b", "score", 5);
    expect(top);
    expect(top).to.be.an("array");
    expect(top.length).to.equal(5);
  });

  it("should return top of threads by posts", async () => {
    const top = await DvachApi.getTop("b", "posts", 5);
    expect(top);
    expect(top).to.be.an("array");
    expect(top.length).to.equal(5);
  });

  it("should fail to get top of threads", async () => {
    try {
      const _top = await DvachApi.getTop("b", "error", 5);
    } catch (err) {
      expect(err.message).to.equal("Wrong sort type");
    }
  });
});
