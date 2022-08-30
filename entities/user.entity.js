import crypto from "crypto"
import CharacterEntity from "./characters.entities.js"

class UserEntity {
    constructor(user) {
        this.id = user.id ?? crypto.randomUUID()
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.image = user.image
        this.characters = user.characters ?? []
    }

    validateUser() {
        if (!this.name || !this.email || !this.password || !this.image) {
            throw new Error("Invalid user!")
        }
    }

    addCharacter(character) {
        const newCharacter = new CharacterEntity(character, this.id) //id do usuario
        this.characters.push(newCharacter.getCharacter())
    }

    getUser() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            image: this.image,
            characters: this.characters
        }
    }
}

export default UserEntity
