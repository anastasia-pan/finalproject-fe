import { useState } from "react";
// Login function created. Testing not yet done- Marc L
function Login ({user, setUser}){
    const [userName, setUserName] = useState("")
    const [password, setPassword] =useState("")
    const baseUrl= `${process.env.REACT_APP_BASE_URL}user/login`

    const handleUserName =(e) => setUserName(e.target.value)
    const handlePassword =(e) => setPassword(e.target.value)


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const payload = JSON.stringify({
            "name":userName,
            "password": password
        })
        console.log(payload)
        const res= await fetch(
            baseUrl,
            {
                "method":"POST",
                "mode":"cors",
                "headers":{
                    "Content-Type":"application/json"
                },
                body:payload
            }
        )
        const data = await res.json()
        setUser({username: data.user.name, id: data.user.id, jwt:data.token})
        console.log(data.user.name)
    }

    return (
        <>
        <h1> Login </h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">Username:</label>
            <input type="text" name="user" value={userName} onChange={handleUserName} />

            <label htmlFor="password">Password: </label>
            <input type= "password" name="password" value={password} onChange={handlePassword} />

            <input type= "submit" value="Submit"/>


        </form>
        </>
    )
}

export default Login;