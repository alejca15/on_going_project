let deleteProduct = async (id) => {
    try {
        let response = await fetch("http://localhost:3001/products" + id,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }
        );
        if (!response.ok) {
            throw new Error("Fetch was not possible")
        }
        return { message: `Product with id ${id} deleted successfully` }
    } catch (error) {
        throw error;
    }
}

export default deleteProduct