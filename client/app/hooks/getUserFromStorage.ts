'use client'
export const getUserLS = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem('trendifyUser');
  }
  ;
}


