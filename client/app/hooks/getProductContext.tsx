import {useContext} from 'react'
import { ProductsContext } from '../Context/productContext';
export function useProducts() {
    const productsContext = useContext(ProductsContext);
    if (!productsContext) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return productsContext;
  }