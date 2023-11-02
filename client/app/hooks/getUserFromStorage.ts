'use client'
export const getUserLS = () => {
  return window.localStorage.getItem('trendifyUser');
}