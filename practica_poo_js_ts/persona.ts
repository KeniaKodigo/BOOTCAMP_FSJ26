class Persona{
    private nombre:string;
    private telefono:number;
    private direccion:string;

    constructor(name:string, phone:number, address:string){
        this.nombre = name;
        this.telefono = phone;
        this.direccion = address;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(address:string){
        this.direccion = address;
    }

    verInfo(){
        return `Informacion Personal:
        Nombre: ${this.nombre}, Telefono: ${this.telefono}, Direccion: ${this.getDireccion()}`;
    }
}

class Estudiante extends Persona{

}