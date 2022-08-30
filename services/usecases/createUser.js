import UserEntity from "../../entities/user.entity.js"

export class CreateUserUseCase {
    constructor(userRepository) {
        this.repository = userRepository
    }

    async execute(user) {
        const newUser = new UserEntity(user)
        newUser.validateUser()
        return await this.repository.create(newUser.getUser())
    }
}