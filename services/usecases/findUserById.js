export class FindUserByIdUseCase {
    constructor(userRepository) {
        this.repository = userRepository
    }

    async execute(userId) {
        if (!userId) {
            throw new Error("User id is invalid!")
        }

        const user = await this.userRepository.findByid(userId)
        return user
    }
}