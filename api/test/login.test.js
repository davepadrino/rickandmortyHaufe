const request = require("supertest");
const { connect, closeDatabase } = require("./db-mock");
const expect = require("chai").expect;
const PORT = 9000;
const HOST = `http://localhost:${PORT}`;

before(async () => await connect());
after(async () => await closeDatabase());

describe("login", () => {
  it("should return 400 if email is missing from body", (done) => {
    const badReq = {
      password: "321321",
    };

    request(HOST)
      .post("/login")
      .send(badReq)
      .expect((res) => {
        expect(res.body).to.include({
          ok: false,
          err: "Email and password are required",
        });
      })
      .expect(400, done);
  });

  it("should return 400 if password is missing from body", (done) => {
    const badReq = {
      email: "test@test.com",
    };

    request(HOST)
      .post("/login")
      .send(badReq)
      .expect((res) => {
        expect(res.body).to.include({
          ok: false,
          err: "Email and password are required",
        });
      })
      .expect(400, done);
  });

  it("responses 400 with no existing user", (done) => {
    const goodReq = {
      email: "dave@test.com1",
      password: "321321",
    };

    request(HOST)
      .post("/login")
      .send(goodReq)
      .end((_, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.eql({
          ok: false,
          err: {
            message: "Wrong user or not found",
          },
        });
        done();
      });
  });

  it("responses 400 with wrong user", (done) => {
    const goodReq = {
      email: "dave@test.com",
      password: "321321",
    };

    request(HOST)
      .post("/login")
      .send(goodReq)
      .end((_, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.eql({
          ok: false,
          err: {
            message: "Wrong password",
          },
        });
        done();
      });
  });

  it("responses 200 with correctly logged in user", (done) => {
    const goodReq = {
      email: "dave@test.com",
      password: "123456",
    };

    request(HOST)
      .post("/login")
      .send(goodReq)
      .end((_, res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });
});
