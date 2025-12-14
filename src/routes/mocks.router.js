import { Router } from "express";
import { generateUsers } from "../module/mock-user.js";
import { generatePets } from "../module/mock-pet.js";
import UserModel from "../dao/models/User.js";
import PetModel from "../dao/models/Pet.js";

const router = Router();

router.get("/mockingpets", async(req, res) => {
    const pets = await generatePets(50)

    res.json({
        status: "success",
        payload: pets
    });
});

router.get("/mockingusers", async (req, res) => {
    const users = await generateUsers(50);

    res.json({
        status: "success",
        payload: users
    });
});

router.post("/generateData", async (req, res) => {
    const { users, pets } = req.body;

    if (!users || !pets) {
        return res.status(400).json({
            status: "error",
            message: "Debe indicar users y pets"
        });
    }

    const mockUsers = await generateUsers(users);
    const mockPets = await generatePets(pets);

    res.json({
        status: "success",
        inserted: {
            users: mockUsers,
            pets: mockPets
        }
    });
});

export default router;