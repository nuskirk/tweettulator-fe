import React from 'react';
import { AuthContext } from '../contexts/auth.context';

export default function useAuth() {
  return React.useContext(AuthContext);
}
