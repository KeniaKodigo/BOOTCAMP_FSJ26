//Declarar una clase "Coach"

export class Coach{
    //alcance es publico
    /***
     * 3 formas de alcance:
     * tengo acceso fuera de clase
     * tengo acceso dentro de clase
     * clase hijas tienen acceso a los elementos de la clase padre
     * 
     * alcance protected
     * tengo acceso dentro de clase
     * clase hijas tienen acceso a los elementos de la clase padre
     * 
     * alcance private
     * tengo acceso dentro de clase
     * Como accedemos a un atributo privado?
     * necesitas 2 metodos, el metodo get(obtiene) y set(captura)
     */
    nombre:string; //publico
    protected correo:string;
    private telefono:number;
    private especialidad:string;

    /** constructor: te permite inicializar un objeto  
     * constructor por defecto
     * constructor parametrizado
    */
    constructor(nombre:string, correo:string, telefono:number, especialidad:string){
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.especialidad = especialidad;
    }


    saludar(){
        return "Hola soy un coach y me llamo" + this.nombre;
    }

    verInfo(){
        return `Numero de Telefono: ${this.telefono}, mi correo es ${this.correo}, mi especialidad es ${this.especialidad}`;
        this.saludar();
    }

    //capturamos el argumento para el atributo privado
    setEspecialidad(especialidad:string){
        this.especialidad = especialidad;
    }

    //devolvemos el valor del atributo privado
    getEspecialidad(){
        return this.especialidad;
    }

    // horarioFijo(){
    //     return "8 a 5pm";
    // }
}

class CoachHora extends Coach{
    horas:number;

    saludar(){
        return "Soy un coach por hora y me llamo " + this.nombre + " y mi correo es " + this.correo + "y mi especialidad es " + this.getEspecialidad();
    }
}





