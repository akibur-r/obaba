import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import AddProductForm from "@/components/addProduct/addProduct";

export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <AddProductForm />
    </ProtectedRoute>
  );
}
