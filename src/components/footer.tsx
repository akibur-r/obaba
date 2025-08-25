export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-center py-6 mt-auto">
      <p className="text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} NextShop. All rights reserved.
      </p>
    </footer>
  );
}
