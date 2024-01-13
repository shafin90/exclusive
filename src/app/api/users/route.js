import connectionMongoDB from "@/dbConfig/mongodb";
import user from "@/models/userMOdel";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request = NextRequest) {
    const { name, email, password } = await request.json();
    console.log("working")
    await connectionMongoDB();
    await user.create({ name, email, password });
    return NextResponse.json({ message: "user added Created" }, { status: 201 });
  }