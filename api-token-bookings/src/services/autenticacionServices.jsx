import axios from "axios";
/**
 * metodos que nos serviran autenticar
 */

//parametro user representa el objeto del usuario (email, password) {}
const login = async (user) => {
    try{
        //consumiendo el endpoint del login
        const response = await axios.post("https://apibookingsaccomodations-production.up.railway.app/api/V1/login", user);
        return response.data;
    }catch(error){
        console.error('Error al autenticarse',error);
    }
}

const logout = () => {
    console.log('Cerrando sesion');
}

export { login, logout }