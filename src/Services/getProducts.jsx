let getProducts= async()=>{
    return new Promise(async(resolve,reject)=>{
        let response= await fetch("http://localhost:3001/products");
        if (response) {
            let products=await response.json();
            return resolve(products)
        }
        return reject(new Error("Was not possible to fetch Products Endpoint"))
    })
};

export default getProducts;
