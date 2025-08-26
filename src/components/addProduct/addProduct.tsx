"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function AddProductForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/api/products", {
        name,
        description,
        price: Number(price),
      });
      router.push("/products");
      toast.success("Product added");
    } catch {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-md mx-auto py-16 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Label>Name</Label>
      <Input value={name} onChange={(e) => setName(e.target.value)} required />
      <Label>Description</Label>
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Label>Price</Label>
      <Input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </Button>
    </form>
  );
}
