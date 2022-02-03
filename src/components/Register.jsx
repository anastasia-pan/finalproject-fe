import {useState} from "react"

function Register(){
    const [user, setUser] = useState("");
    const [password, setPassword]= useState("")
    const baseUrl="http://localhost/user/registeruser"

    const handleUserChange =(e)=> setUser (e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const submitForm = async (e) => {
        
    }
}