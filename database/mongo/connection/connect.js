import dotenv from 'dotenv'
import pkg from 'mongoose';
const {connect} = pkg
export function mongoConnect() {
    connect(process.env.MONGO_URL).then(() => {
            console.log('Connected to MongoDB')
        }).catch((err) => {
            console.log('not connected')
        })
}