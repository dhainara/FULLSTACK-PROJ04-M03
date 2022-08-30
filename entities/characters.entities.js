import crypto from "crypto"

class CharacterEntity {
    constructor(character, userId) {
        this.id = character.id ?? crypto.randomUUID()
        this.name = character.name
        this.image = character.image
        this.userId = userId
    }

    getCharatter() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            userId: this.userId,
        }
    }
}

export default CharacterEntity