"use client";
import Image from "next/image";

export default function Home() {
  const products = [
    { id: 1, name: "Classic White Shirt", price: "$29", img: "https://images.unsplash.com/photo-1722310752951-4d459d28c678?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Denim Jacket", price: "$59", img: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVuaW0lMjBKYWNrZXR8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Summer Dress", price: "$39", img: "https://images.unsplash.com/photo-1593105522065-9a6ecd21aeb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Hoodie Black", price: "$45", img: "https://images.unsplash.com/photo-1636170029620-73014ed8d0ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Blue Jeans", price: "$49", img: "https://images.unsplash.com/photo-1700993443911-6edad57779c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fEJsdWUlMjBKZWFuc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 6, name: "Leather Jacket", price: "$89", img: "https://images.unsplash.com/photo-1553640662-9ab20b8fa2ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "Casual T-Shirt", price: "$25", img: "https://images.unsplash.com/photo-1660997351262-6c31d8a35b6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "Red Dress", price: "$55", img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFJlZCUyMERyZXNzfGVufDB8fDB8fHww" },
    { id: 9, name: "Sportswear Set", price: "$60", img: "https://images.unsplash.com/photo-1716951129133-33876f0e2338?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "Formal Blazer", price: "$75", img: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 11, name: "Trendy Skirt", price: "$30", img: "https://plus.unsplash.com/premium_photo-1727967194287-7887e311a72b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRyZW5keSUyMFNraXJ0fGVufDB8fDB8fHww" },
    { id: 12, name: "Casual Polo Shirt", price: "$35", img: "https://images.unsplash.com/photo-1717724162644-75f624f413ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhc3VhbCUyMFBvbG8lMjBTaGlydHxlbnwwfHwwfHx8MA%3D%3D" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">Clothify</h1>
        <ul className="hidden md:flex gap-6 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Shop</li>
          <li className="hover:text-indigo-600 cursor-pointer">About</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          🛒 Cart
        </button>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h2>
        <p className="mb-6 text-lg">Trendy fashion clothing for men & women</p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200">
          Shop Now
        </button>
      </section>

      {/* Product Grid */}
      <section className="px-8 py-16">
        <h3 className="text-3xl font-bold text-center mb-10">Our Latest Collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{p.name}</h4>
                <p className="text-indigo-600 font-bold">{p.price}</p>
                <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8 mt-12">
        <p>© 2025 Clothify. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </footer>
    </div>
  );
}
