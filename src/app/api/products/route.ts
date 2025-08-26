import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

type LeanProduct = {
  _id: Types.ObjectId; // instead of any
  name: string;
  description: string;
  price: number;
  image?: string;
};

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Explicitly type as an array
    const products = await Product.find(
      {},
      { name: 1, description: 1, price: 1, image: 1 }
    ).lean<LeanProduct[]>();

    // Map _id to string safely
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

export async function POST(req: NextRequest) {
  try {
    const { name, description, price } = await req.json();
    await connectDB();

    const product = await Product.create({ name, description, price });

    return NextResponse.json({
      _id: product._id.toString(),
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image || null,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}
