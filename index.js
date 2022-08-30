import { UserRepositoryMongoDb } from "./database/repositories/userRepository.js"
import { CreateUserUseCase } from './services/usecases/createUser.js'
import {mongoConnect} from './database/mongo/connection/connect.js'

const repository = new UserRepositoryMongoDb()
const createUserUseCase = new CreateUserUseCase(repository)

const newUser = await createUserUseCase.execute({
    name: "Dahianara",
    email: "DAsdadsad@gajkjdskk.com",
    password: "dsadsadsa",
    image: "http://png.com"
})

console.log(newUser)
mongoConnect()