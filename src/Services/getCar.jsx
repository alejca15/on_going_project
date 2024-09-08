let getCar = async () => {
    return new Promise(async (resolve, reject) => {
        let response = await fetch("http://localhost:3001/car");
        if (response) {
            let car = await response.json();
            return resolve(car);
        }
        else return reject(new Error("Fetch was not possible"))
    });
};

export default getCar;