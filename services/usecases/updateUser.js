export class UpdateUserUseCase {
    constructor(userRepository,findUserById) {
        this.repository = userRepository
        this.findUserById = this.findUserById
    }

    async execute(userUpdated, userId) {
        const userToUpdate = await this.findUserById(userId)
        
        if (!userToUpdate){
            throw new Error("Couldn't found a user with the id: "  + userId)
        }

        const userUpdated = { ...userToUpdate, userUpdated }

        userValidated.validate()
        return await this.repository.updateUser()
    }
}