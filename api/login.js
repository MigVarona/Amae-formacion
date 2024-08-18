import dbConnect from '../lib/mongodb';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { username, password } = req.body;

  await dbConnect();

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }


  res.status(200).json({ message: 'Login successful' });
}
