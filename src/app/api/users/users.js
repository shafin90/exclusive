import connectionMongoDB from "@/dbConfig/mongodb";
import user from "@/models/userMOdel";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
    await connectionMongoDB();
    //   const tag = req.nextUrl.searchParams.get("list")
    //   revalidateTag(tag)
    const allusers = await user.find();

    // console.log("connected", allProducts)
    return NextResponse.json(allusers);
}