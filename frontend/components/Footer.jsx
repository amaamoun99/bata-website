export default function Footer() {
    return (
      <footer className="bg-duckBlue text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Duck E-Commerce. All rights reserved. </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-300">Terms of Service</a>
            <a href="#" className="hover:text-yellow-300">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  }
  