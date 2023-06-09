import { useContext, useState } from "react";
import { authorizationContext } from "../../services/authorization";
import { getPass } from "../../lib/UserFetch.mjs"
import styles from "./LogIn.module.css"

function LogIn() {


    const { consent, savePass } = useContext ( authorizationContext )

    const [ UserName, setUserName ] = useState ("Andres")
    const [ password, setPassword ] = useState ("Cabra")

    function Verify(pass) {
        if  ( pass ) {
            savePass ( pass )
        } else alert("Incorrecto")
    }

    return(
        <>
        { ! consent &&
        <div className={styles.container}>
            <label>
                Usuario
                <input className={styles.input} 
                    type="text" 
                    value={UserName} 
                    onInput={(event)=>{
                    setUserName(event.target.value)}}
                />
            </label>
            <label>
                Contrasinal
                <input className={styles.input} 
                    type="text" 
                    value={password} 
                    onInput={(event)=>{
                    setPassword(event.target.value)}}
                />
            </label>
            <button className={styles.button} 
                    onClick={()=>{
                    getPass(UserName, password, Verify)}}>
                    LogIn
            </button>
        </div>
        }
        </>
    );
  }

  
  export default LogIn