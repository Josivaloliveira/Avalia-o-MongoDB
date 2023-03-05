import mongoose from 'mongoose'

const URI = 'mongodb://localhost:27017'

const databaseConnection = async () => {
    if (!global.mongoose) {
      mongoose.set('strictquery', false)
      global.mongoose = await mongoose.connect(URI)
  }
}

export default databaseConnection