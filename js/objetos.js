//Crear 3 objetos

//Objeto Movil
var movil = {
    //Propiedades del Objeto
    marca:"Samsung",
    modelo: "Galaxy S10",
    anyo: 2019,
    sistemaOperativo: "Android 9 Pie",
    mamoriaRam: "8 GB",
    pantalla: "6,1 pulgadas",
    camara: "16 MP Ultra Wide",

    //Metodos de un Objeto
    detalles : function (){
    console.log(`${this.marca} : ${this.modelo} : ${this.anyo} : ${this.sistemaOperativo} : ${this.ram} : ${this.pantalla} : ${this.camara}`);
    } 

};

//Objeto Television
var television = {
    //Propiedades del Objeto
    marca:"LG",
    pulgadas: 43,
    calidadImagen: "UHD 4K",
    sistemaOperativo:"WebOS Smart TV 4.5",
    resolucion: "3840 x 2160 píxeles",

    //Metodos de un objeto
    detalles : function (){
        console.log(`${this.marca} : ${this.pulgadas} : ${this.calidadImagen} : ${this.sistemaOperativo} : ${this.resolucion}`);
    }

};

//Objeto Ordenador
var ordenador = {
    marca: "HP",
    pulgadas: 14,
    sistemaOperativo: "Windows 10",
    memoriaRam: "8 GB",
    procesador: "Intel Core i7",

    //Metodos de un objeto
    detalles : function (){
        console.log(`${this.marca} : ${this.pulgadas} : ${this.sistemaOperativo} : ${this.memoriaRam} : ${this.procesador}`);
    }
    
};


