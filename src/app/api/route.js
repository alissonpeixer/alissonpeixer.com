import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'GET OK!' });
}

export async function POST() {
  return NextResponse.json({ message: 'POST OK!', data: body }, { status: 201 });
}