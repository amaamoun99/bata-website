// components/ClientProvider.js
'use client'; // This ensures the component is client-rendered.

import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path to match your setup

const ClientProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
