// src/app/api/login/route.ts
import { NextResponse } from 'next/server';
import {dbConnect} from '../../../../lib/mongodb'; 
import User from '../../../../models/User';     
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    await dbConnect(); 

   
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful' });
  } catch (error) {
    const errorMessage = (error as Error).message || 'Internal Server Error';
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}