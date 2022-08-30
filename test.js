import UserEntity from "./entities/user.entity.js"

const user1 = new UserEntity({
    id: "1",
    name: "Dhainara",
    email: "dhainarasouza@hotmail.com",
    password: "12345678",
    image: "http://image.com",
    characters: [
        {
            name: "Morty",
            image: "http://morty.com",
            userId: "1"
        }, {
            name: "Rick",
            image: "http://rick.com",
            userId: "1"
        }
    ]
})

const user2 = new UserEntity({
    id: "2",
    name: "Pablo",
    email: "pablo654@hotmail.com",
    password: "18_dedal",
    image: "http://pikachu.com",
    characters: [
        {
            name: "Morty",
            image: "http://morty.com",
            userId: "2"
        }
    ]
})

console.log(user1.getUser())