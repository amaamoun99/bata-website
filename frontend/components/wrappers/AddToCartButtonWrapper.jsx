// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import AddToCartButton from '../AddToCartButton'; // Import your ResetPassword component

const AddToCartButtonWrapper = ({product}) => {
  return (
    <ClientProvider>
        
        <AddToCartButton product={product}/>
        
    </ClientProvider>
  );
};

export default AddToCartButtonWrapper;