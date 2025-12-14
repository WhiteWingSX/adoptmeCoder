import {faker} from "@faker-js/faker";
import {generateUser} from "./mock-user.js";

export const generatePet = async() => {
    const pet = {
        name: faker.animal.petName(),
        specie: faker.helpers.arrayElement(["dog","cat","bird","fish","reptile"]),
    }

    return pet;
}

export const generatePets = async (quantity) => {
    const pets = [];

    for (let i = 0; i < quantity; i++) {
        pets.push(await generatePet());
    }

    return pets;
}