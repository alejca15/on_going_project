let deleteOrder = async (id) => {
    try {
        let response = await fetch("http://localhost:3001/orders/" + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error("Fetch was not possible")
        }
        return { messagge: `Product with ${id} has been removed from the Orders` }
    } catch (error) {
        throw error
    }
};

export default deleteOrder