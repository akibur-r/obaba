import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Type the lean result
    const products = await Product.find(
      {},
      { name: 1, description: 1, price: 1, image: 1 }
    ).lean<
      {
        _id: { toString(): string };
        name: string;
        description: string;
        price: number;
        image?: string;
      }[]
    >();

    const formatted = products.map((p) => ({
      _id: p._id.toString(),
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image || null,
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
