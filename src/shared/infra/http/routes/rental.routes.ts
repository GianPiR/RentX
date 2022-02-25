import { CreateRentalController } from "@modules/rentals/usesCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router()

const createRentalController = new CreateRentalController()

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle)

export { rentalRoutes }