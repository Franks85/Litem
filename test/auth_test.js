const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("Express app", () => {
 
  it("GET request to /", (done) => {
    request(app)
      .get("/")
      .end((err, response) => {
        assert(response.body.hi === 'there')
        done()
      });

  });
  
});