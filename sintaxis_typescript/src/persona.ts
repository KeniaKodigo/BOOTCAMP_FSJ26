//clase base
export class Persona{
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

//clase hija
export class Estudiante extends Persona{
    protected carnet:string;
    protected bootcamp:string;
    protected correo:string;

    constructor(name:string, phone:number, address:string, carnet:string, bootcamp:string, email:string){
        //heredar el constructor del padre
        super(name, phone, address);
        this.carnet = carnet;
        this.bootcamp = bootcamp;
        this.correo = email;
    }

    //Aplicando polimorfismo, llamamos el mismo metodo de la clase Padre
    verInfo(): string {
        //cambiamos comportamiento
        //sobrrescribiendo en el metodo otra cosa
        return `Estudiante de KODIGO, Carnet: ${this.carnet}, Bootcamp: ${this.bootcamp}, Correo Electronico: ${this.correo}`;
    }
}

class DirectorAcademico extends Persona{
    private correo:string;
    private password:string;

    //code...
}