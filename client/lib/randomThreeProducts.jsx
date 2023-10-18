export const randomThreeProducts = (products) => {
    let arr = Array.from({ length: 3 },() => Math.floor(Math.random()*10));
    return [products[arr[0]],products[arr[1]],products[arr[2]]];
  }