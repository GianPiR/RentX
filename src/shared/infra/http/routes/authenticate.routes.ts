import { Router } from "express";
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";

const authenticateRoutes = Router()

const authenticaUseController = new AuthenticateUserController()
const refreshTokenController = new RefreshTokenController()

authenticateRoutes.post("/sessions", authenticaUseController.handle)
authenticateRoutes.post("/refresh-token", refreshTokenController.handle)

export { authenticateRoutes }