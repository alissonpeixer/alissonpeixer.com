import fs from 'fs';

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const item = fs.readdirSync('./logos')  
  return NextResponse.json({ message:item }, { status: 200 }); 
}