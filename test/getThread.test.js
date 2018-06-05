const DvachApi = require("../");

const { expect } = require("chai");

describe("getThread function test", async () => {
  it("should return posts in thread", async () => {
    const posts = await DvachApi.getThread("abu", 42375);
    expect(posts);
    expect(posts).to.be.an("array");
    expect(posts[0].toString()).to.equals(
      `<[${posts[0].num}]: ${posts[0].comment}>`,
    );
  });

  it("should fail to get posts in thread", async () => {
    try {
      const _posts = await DvachApi.getThread("abu", 0);
    } catch (err) {
      expect(err).to.have.property(
        "message",
        "Request failed with status code 404",
      );
    }
  });
});
