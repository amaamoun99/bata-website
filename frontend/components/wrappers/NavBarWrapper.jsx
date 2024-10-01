// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import NavBar from '../NavBar'; // Import your ResetPassword component

const NavBarWrapper = () => {
  return (
    <ClientProvider>
        <NavBar/>
    </ClientProvider>
  );
};

export default NavBarWrapper;