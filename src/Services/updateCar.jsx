let updateCar = async (id, product) => {
    try {
        let response = await fetch("http://localhost:3001/car/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });        
        if (!response.ok) {
            throw new Error("Was not possible to fetch the Car", Error)
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
}


export default updateCar;