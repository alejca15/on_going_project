export default async function getUsers() {
  return new Promise(async (resolve, reject) => {
    let response = await fetch("http://localhost:3001/users");
    if (response) {
      let users = await response.json();
      return resolve(users);
    } else {
      reject(new Error("Fetch was not possible"));
    }
  });
};
