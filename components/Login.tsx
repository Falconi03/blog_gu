import { useState } from "react"

import axios from "axios";



import styles from '../styles/Home.module.css'

export default () => {
    
    async function cadastroUsuario(e) {
        e.preventDefault()
        console.log(`usuario ${name} foi cadastrado com a senha ${password}`)
        this.setState({ data: "objectid"})

        await axios.get("../pages/api/users", {
            data: this.state.data,
        });
        
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    return(
        <div className={styles.Container}>
            <div className={styles.Admin}>
                <div className={styles.Login}>
                    <h1>Login</h1>
                    <form onSubmit={cadastroUsuario} className={styles.form}>
                        <label htmlFor='name'>Nome: </label>
                        <li className={styles.item}>
                            <input
                                type='text'
                                name='name'
                                placeholder='Digite Seu nome'
                                onChange={(e) => setName(e.target.value)} />
                        </li>
                        <label htmlFor='password'>Senha: </label>
                        <li className={styles.item}>
                            <input
                                type='password'
                                name='password'
                                placeholder='Digite Seu password'
                                onChange={(e) => setPassword(e.target.value)} />
                        </li>
                        <button 
                        onClick={cadastroUsuario}>cadastrar</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
