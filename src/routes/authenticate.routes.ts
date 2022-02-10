import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router()

const authenticaUseController = new AuthenticateUserController()

authenticateRoutes.post("/sessions", authenticaUseController.handle)

export { authenticateRoutes }