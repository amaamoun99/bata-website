import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const productCategories = [
    { name: 'T-shirts', description: 'Fun and educational toys for kids.', img: 'https://i.pinimg.com/564x/08/80/79/088079ca851652f02d43aa7402307928.jpg', url: 'collections/t-shirts' },
    { name: 'Boxers', description: 'Stylish clothing for all ages.', img: 'https://i.pinimg.com/564x/60/ef/51/60ef51bcf2056aba327717d963e61728.jpg', url: 'collections/boxers' },
    { name: 'Sun Glasses', description: 'Trendy accessories to complete your look.', img: 'https://i.pinimg.com/736x/f9/6c/05/f96c05868ea71e234f203241efa0a595.jpg', url: 'collections/sun-glasses' },
    { name: 'Socks', description: 'Latest gadgets and tech products.', img: 'https://i.pinimg.com/564x/68/f2/c5/68f2c5ea8809461dfdc5d34f50f6362f.jpg', url: 'collections/socks' },
  ];

  return (
    <div className="bg-duckBackground">
      {/* Banner Section */}
      <div className="relative w-full h-[500px]">
        <Image 
          src="/images/duck wallpaper.jpg" // Replace with your image path
          alt="E-commerce Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-60 bg-duckDarkBlue">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">Welcome to Ducks Heaven</h1>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-center text-4xl font-extrabold text-duckDarkBlue tracking-wide mb-10">
          Everything You Need, Right Away
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {productCategories.map((category, index) => (
            <Link href={category.url} key={index} passHref>
              <div className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative group">
                <div className="relative h-40">
                  <img
                    src={category.img} // Replace with your category image path
                    alt={category.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-duckDarkBlue opacity-0 transition duration-500 group-hover:opacity-40"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-duckBlue group-hover:text-blue-900 transition duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold text-duckDarkBlue">New Products</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src="/path/to/product-image.jpg" // Replace with your product image path
                alt={`Product ${index + 1}`}
                width={300}
                height={200}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-duckBlue">Product {index + 1}</h3>
                <p className="text-gray-600 mt-2">$19.99</p>
                <button className="mt-4 bg-duckBlue text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/*browse shop section*/}
      <section className="py-10 flex items-center">
  <div className="flex-1 p-6">
    <h2 className="text-4xl font-bold text-duckDarkBlue mb-4">Discover Our Exclusive Products</h2>
    <p className="text-lg text-gray-700 mb-6">
      Dive into our amazing selection of products that cater to all your needs. Explore and find what you love today!
    </p>
    <Link href="/collections/all-products">
      <div className="inline-block bg-duckBlue text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300">
        View Products
      </div>
    </Link>
  </div>
  <div className="flex-1 h-full relative">
    <img 
      src="https://i.pinimg.com/564x/6d/e0/61/6de06177ddd751eed7558705f110765d.jpg" // Replace with your image path
      alt="ducks"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</section>



      {/* Call to Action Section */}
      <section className="py-10 text-center bg-gradient-to-r from-blue-100 to-blue-200">
        <h2 className="text-3xl font-bold text-duckDarkBlue">Join Our Community!</h2>
        <p className="mt-4 text-gray-600">Sign up to receive the latest updates and special offers!</p>
        <Link href="/signup">
          <div className="mt-4 inline-block bg-duckBlue text-white py-3 px-6 rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
            Sign Up Now
          </div>
        </Link>
      </section>
    </div>
  );
}
