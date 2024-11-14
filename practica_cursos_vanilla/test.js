let arreglo = [
    {
        titulo: "Comida Marrueco",
        img: "test1",
        precio: 350,
        id: 5
    },

    // {
    //     titulo: "Comida Italiana",
    //     img: "test2",
    //     precio: 67,
    //     id: 6
    // },

    {
        titulo: "Test",
        img: "test2",
        precio: 67,
        id: 10
    }
]

//filtrando los cursos
arreglo = arreglo.filter(curso => curso.id != 6)


arreglo.forEach(item => {
    item.titulo //titulo1, titulo2
    item //{titulo, precio, imagen, id}, {titulo, precio, imagen, id}
})


let persona = {
    nombre: "kenia",
    apellido: "paiz",
    edad: 26
}

persona.edad //26

let numeros = [23,45,67,100]
numeros.forEach(item => {
    item //23, 45, 67, 100
})
numeros[2] //67


