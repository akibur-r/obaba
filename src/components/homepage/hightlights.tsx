import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Star, ShieldCheck } from "lucide-react";

export default function Highlights() {
  const highlights = [
    {
      title: "Wide Product Range",
      desc: "Explore a variety of products across multiple categories tailored to your needs.",
      icon: <ShoppingBag className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Top Quality",
      desc: "We ensure premium quality products with excellent customer satisfaction.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Secure & Trusted",
      desc: "Shop with confidence knowing Obaba.com provides safe payments and protection.",
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Product Highlights
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {highlights.map((h, idx) => (
          <Card
            key={idx}
            className="hover:shadow-lg transition-all duration-300 border rounded-2xl"
          >
            <CardHeader className="flex flex-col items-center text-center">
              {h.icon}
              <CardTitle className="mt-4 text-xl">{h.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300 text-center">
              {h.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
