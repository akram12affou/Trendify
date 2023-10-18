export async function getAllProducts() {
     const res = await fetch('https://fakestoreapi.com/products')
     if(!res.ok) return undefined
     return res.json()
}
