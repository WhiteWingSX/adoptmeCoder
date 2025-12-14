import {faker} from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateUser = async() => {

    const passwordHash = await bcrypt.hash("coder123", 10);

    const user = {
        _id: faker.database.mongodbObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(["user","admin"]),
        password: passwordHash,
        pets: []
    }

    return user;
}

export const generateUsers = async (quantity) => {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push(await generateUser());
    }

    return users;
}