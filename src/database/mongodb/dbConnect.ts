import config from '@/config/config'
import mongoose from 'mongoose'

export const mongoDBConnect = async () => {
  try {
    const db = await mongoose.connect(config.URI_MONGO)
    console.log(`🚀🚀 DB connected to ${db.connection.name} 🚀🚀`)
  } catch (err) {
    console.log('⛔⛔ Failed Connection DB ⛔⛔')
  }
}
