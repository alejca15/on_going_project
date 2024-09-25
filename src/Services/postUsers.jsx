export default async function postUsers(name,password,email,city,phone){
    let user_data={
        name,
        password,
        email,
        city,
        phone,
        admin:false
    }
    try {
        let response=await fetch("http://localhost:3001/users",{
            method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_data),
    });
    return await response.json();
        
    } catch (error) {
        console.log("Error posting user");
        throw error;
        
    }

}