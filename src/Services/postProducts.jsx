let postProduct = async (product_data) => {

    try {
        let response = await fetch("http://localhost:3001/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product_data),
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export default postProduct;