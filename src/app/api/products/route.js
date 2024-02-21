import connectionMongoDB from "@/dbConfig/mongodb";
import product from "@/models/productModel";
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest) {
    await connectionMongoDB();
    //   const tag = req.nextUrl.searchParams.get("list")
    //   revalidateTag(tag)
    try {
        const allProducts = await product.find();

        // console.log("connected", allProducts)
        return NextResponse.json(allProducts);
    } catch (error) {
        console.log(error)
        return "something went wrong. try again"
    }

}


