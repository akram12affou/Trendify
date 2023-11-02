import {useContext} from 'react'
import { AuthContext } from '../Context/authContext';
export function useAuth() {
    const authContext= useContext<any>(AuthContext);
    if (!authContext){
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return authContext;
  }