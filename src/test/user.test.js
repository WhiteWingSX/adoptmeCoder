import supertest from "supertest";
import { expect } from "chai";
import mongoose from "mongoose";

const request = supertest("http://localhost:8080");

describe("Users Controller - test de funcionalidad endpoints", function () {

    let userId;

    it("GET /api/users - Entrega del listado de usuarios", async () => {
        const res = await request.get("/api/users");

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.be.an("array");

        userId = res.body.payload[0]._id;
    });

    it("GET /api/users/:uid - Entrega un usuario por el ID", async () => {
        const res = await request.get(`/api/users/69812c422fb21778848970d1`);

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.payload).to.have.property("_id");
        expect(res.body.payload).to.have.property("email");
    });

    it("GET /api/users/:uid - Usuario no existe", async () => {
        const fakeId = "64b000000000000000000000";

        const res = await request.get(`/api/users/${fakeId}`);

        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal("error");
        expect(res.body.error).to.equal("User not found");
    });

    it("PUT /api/users/:uid - Actualizar usuario", async () => {
        const res = await request
            .put(`/api/users/69812c422fb21778848970d1`)
            .send({ first_name: "KRATOS" });

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.message).to.equal("User updated");
    });

    it("PUT /api/users/:uid - Usuario no inexiste", async () => {
        const fakeId = "64b000000000000000000000";

        const res = await request
            .put(`/api/users/${fakeId}`)
            .send({ first_name: "FakeKratos" });

        expect(res.status).to.equal(404);
        expect(res.body.status).to.equal("error");
        expect(res.body.error).to.equal("User not found");
    });

    it("DELETE /api/users/:uid - eliminar un usuario", async () => {
        const res = await request.delete(`/api/users/69812c422fb21778848970d1`);

        expect(res.status).to.equal(200);
        expect(res.body.status).to.equal("success");
        expect(res.body.message).to.equal("User deleted");
    });
});