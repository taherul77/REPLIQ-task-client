export async function getProduct() {
    const res = await fetch('http://localhost:5000/api/v1/menu/')
    
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }