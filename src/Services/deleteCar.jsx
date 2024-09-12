
let deleteCar = async (id) => {
    try {
        let response = await fetch("http://localhost:3001/car/" + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }

        });
        if (!response.ok) {
            throw new Error("Fetch was not possible")
        }
        return { messagge: `Product with ${id} has been removed from the car` }
    } catch (error) {
        throw error

    }
};

export default deleteCar