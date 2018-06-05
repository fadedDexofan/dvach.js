const DvachApi = require("../");

const { expect } = require("chai");

describe("class init test", () => {
  it("should create new class and set passcode", () => {
    const api = new DvachApi("passcode");
    expect(api);
    expect(api).to.have.property("passcode", "passcode");
  });
});
