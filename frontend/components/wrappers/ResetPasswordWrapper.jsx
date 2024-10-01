// components/ResetPasswordWrapper.js
import ClientProvider from '../ClientProvider'; // Adjust the path as needed
import ResetPassword from '../general/ResetPasswordPage'; // Import your ResetPassword component

const ResetPasswordWrapper = () => {
  return (
    <ClientProvider>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
        <div className="max-w-md w-full bg-duckWhite rounded-lg shadow-lg p-8">
          {/* Duck-themed Header */}
          <h2 className="text-3xl text-center mb-6 text-duckYellow font-bold">enter token</h2>
          <ResetPassword />
        </div>
      </div>
    </ClientProvider>
  );
};

export default ResetPasswordWrapper;
