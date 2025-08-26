import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { Types } from "mongoose";
import { notFound } from "next/navigation";

type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

async function getProduct(id: string): Promise<ProductType | null> {
  await connectDB();

  // Validate id
  if (!Types.ObjectId.isValid(id)) return null;

  const product = await Product.findById(id, {
    name: 1,
    description: 1,
    price: 1,
    image: 1,
  }).lean<{
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: number;
    image?: string;
  }>();

  if (!product) return null;

  return {
    _id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
  };
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          <p className="text-lg font-semibold mb-4">Price: ${product.price}</p>
          {product.image && (
            <div className="relative w-full h-64">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
