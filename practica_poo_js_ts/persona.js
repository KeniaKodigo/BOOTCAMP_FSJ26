var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(name, phone, address) {
        this.nombre = name;
        this.telefono = phone;
        this.direccion = address;
    }
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (address) {
        this.direccion = address;
    };
    Persona.prototype.verInfo = function () {
        return "Informacion Personal:\n        Nombre: ".concat(this.nombre, ", Telefono: ").concat(this.telefono, ", Direccion: ").concat(this.getDireccion());
    };
    return Persona;
}());
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Estudiante;
}(Persona));
