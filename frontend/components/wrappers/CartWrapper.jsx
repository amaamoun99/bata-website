// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import Cart from '../Cart'; // Import your ResetPassword component

const CartWrapper = () => {
  return (
    <ClientProvider>
        <Cart/>
    </ClientProvider>
  );
};

export default CartWrapper;