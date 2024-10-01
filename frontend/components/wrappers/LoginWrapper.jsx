// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import LoginForm from '../LoginForm'; // Import your ResetPassword component

const LoginFormWrapper = () => {
  return (
    <ClientProvider>
        <LoginForm/>
    </ClientProvider>
  );
};

export default LoginFormWrapper;