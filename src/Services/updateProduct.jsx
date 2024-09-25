let updateProduct = async (product) => {
    try {
        let response = await fetch("http://localhost:3001/products/" + product.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });        
        if (!response.ok) {
            throw new Error("Was not possible to fetch the Products", Error)
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}


export default updateProduct;