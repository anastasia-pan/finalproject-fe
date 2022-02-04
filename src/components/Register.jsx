import {useState} from "react"

function Register(){
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("")
    const baseUrl=`${process.env.REACT_APP_BASE_URL}/user/registeruser`

    const handleUserChange =(e)=> setUser (e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const submitForm = async (e) => {
        e.preventDefault();
        const payload= JSON.stringify({
            name:user,
            password:password,
        })
        const res= await fetch (baseUrl,{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/json",
            },
            body:payload
        }
        )
        console.log(await res.json())
        
    }
    return(
        <form onSubmit={submitForm}>
            <label> Register User </label>
            <label htmlFor="user">Username:</label>
            <input type="text" name="user" value ={user} onChange={handleUserChange} />
            
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value= {password} onChange={handlePasswordChange}/>

            <input type= "submit" value="Submit"/>


        </form>
    )
}

export default Register