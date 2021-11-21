import mongoose, { Mongoose } from 'mongoose'
import databaseConfig from '../config/database.config'

async function connectDB() {
  mongoose
    .connect(databaseConfig.dbURI)
    .then(() => {
      console.log('Database connnected')
    })
    .catch((err) => console.log(err))
}

export default connectDB
