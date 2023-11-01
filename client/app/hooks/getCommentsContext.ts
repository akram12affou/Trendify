import {useContext} from 'react'
import { CommentContext } from '../Context/commentContext';
export function useComments() {
    const commentContext = useContext(CommentContext);
    if (!commentContext) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return commentContext;
  }