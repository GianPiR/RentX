import {container} from "tsyringe"
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementatios/CategoriesRepository"
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository"
import {SpecificationsRepository} from "../../modules/cars/repositories/implementatios/SpecificationsRepository"

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
)