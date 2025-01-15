import axios from "axios";

const token = sessionStorage.getItem('api-token')

const getAccomodations = async () => {
    try{
        //validamos que el endpoint lleve la autorizacion del token
        const response = await axios.get("https://apibookingsaccomodations-production.up.railway.app/api/V1/accomodations", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }catch(error){
        console.error('Error al autenticarse',error);
    }
}

export { getAccomodations }