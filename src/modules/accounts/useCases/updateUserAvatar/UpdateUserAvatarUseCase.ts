import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";


interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const users = await this.usersRepository.findById(user_id)

        if (users.avatar){
            await deleteFile(`./tmp/avatar/${users.avatar}`)
        }

        users.avatar = avatar_file

        await this.usersRepository.create(users)
    }
}

export { UpdateUserAvatarUseCase }