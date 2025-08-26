"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { Types } from "mongoose";
import Link from "next/link";

type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

async function getProducts(): Promise<ProductType[]> {
  await connectDB();

  // Use Types.ObjectId instead of any
  const products = await Product.find(
    {},
    { name: 1, description: 1, price: 1, image: 1 }
  ).lean<
    {
      _id: Types.ObjectId;
      name: string;
      description: string;
      price: number;
      image?: string;
    }[]
  >();

  return products.map((p) => ({
    _id: p._id.toString(),
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
  }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-12 text-center">Our Products</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product._id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {product.description}
              </p>
              <p className="font-semibold">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/products/${product._id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
