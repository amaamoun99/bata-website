// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import CreateNewProductForm from '../createNewProductForm'; // Import your ResetPassword component

const CreateNewProductFormWrapper = () => {
  return (
    <ClientProvider>
       <CreateNewProductForm/>
    </ClientProvider>
  );
};

export default CreateNewProductFormWrapper;