// app/product/[id]/page.js
import Image from 'next/image';
import axios from 'axios';
import AddToCartButton from '@/components/wrappers/AddToCartButtonWrapper';


// This function runs on the server side, fetching product data based on the dynamic id
export default async function ProductPage({ params }) {
  const { id } = params; // Extract the dynamic ID from the URL

  let product = null;
 // console.log('Fetching product with ID:', id); // Log the ID to ensure it's correct
  // Fetch product data based on the ID
  try {
    const response = await axios.get(`http://localhost:3001/api/v1/products/${id}`);
    //console.log('API Response:', response.data); // Log the response from the API
    // Extract product correctly from response (data.data)
    product = response.data.data.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    // You can return a 404 page or handle errors here
  }

  if (!product) {
    return <p>Product not found</p>; // Fallback if no product found
  }

 

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-semibold ">Price: ${product.price}</p>
      {product.priceDiscount && (
        <p className="text-lg text-green-500">Discounted Price: ${product.priceDiscount}</p>
      )}

      {/* Replace the images part based on your actual product structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Dummy image for now as the response doesn't seem to have an image URL */}
        {/* <Image
          src="/images/default.jpg" // You can change this once the image URL is in the response
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-auto"
        /> */}
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Available Stockjkkk:</h2>
        <p>{product.stock}</p>
      </div>
     <AddToCartButton product={product}/>
    </div>
  );
}
