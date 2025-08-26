import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import fs from "fs";
import { notFound } from "next/navigation";
import path from "path";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

async function getProduct(id: string): Promise<Product | null> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const products: Product[] = JSON.parse(data);

  const product = products.find((p) => p.id === id);
  return product || null;
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
          <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
          {product.image && (
            <div className="relative w-full h-64">
              <div className="relative w-full h-64">
                <div className="relative w-full h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
