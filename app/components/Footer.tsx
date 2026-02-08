"use client";

export default function Footer() {
  return (
    // Footer Section
    <footer className="px-12 py-24 bg-black text-white max-md:px-6 max-md:py-12">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-3 max-md:grid-cols-1">
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="mt-4 text-sm">123 Karate Street, City, Country</p>
          <p className="mt-2 text-sm">Phone: +123 456 7890</p>
          <p className="mt-2 text-sm">Email: info@karateacademy.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-sm hover:underline">Home</a></li>
            <li><a href="#about" className="text-sm hover:underline">About</a></li>
            <li><a href="#classes" className="text-sm hover:underline">Classes</a></li>
            <li><a href="#contact" className="text-sm hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-sm hover:text-red-500">Facebook</a>
            <a href="#" className="text-sm hover:text-red-500">Twitter</a>
            <a href="#" className="text-sm hover:text-red-500">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-500">© 2026 Srab Karate Art Academy. All rights reserved.</div>
    </footer>
  );
}
