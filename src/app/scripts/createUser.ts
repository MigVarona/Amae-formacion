// src/scripts/createUser.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../../../models/User'; 

const MONGODB_URI = process.env.MONGODB_URI || 'your_mongodb_connection_string';

async function createUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const username = 'amae';
    const password = 'amae2024';

    // Cifrar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear el nuevo usuario
    const user = new User({
      username,
      password: hashedPassword,
    });

    // Guardar el usuario en la base de datos
    await user.save();
    console.log('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await mongoose.disconnect();
  }
}

createUser();
