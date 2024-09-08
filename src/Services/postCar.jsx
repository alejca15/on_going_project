let postCar = async (product) => {
    try {
        let response = await fetch("http://localhost:3001/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
    } catch (error) {
        throw error
    }
}

export default postCar