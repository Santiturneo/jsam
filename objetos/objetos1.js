var ob={
    nombre:"Juan",
    documento:123456,
    ficha:2237749,
    datos:function(){return `Soy ${this.nombre} con documento ${this.documento} y ficha ${this.ficha} mi telefono es ${this.telefono}`}
}
console.log(ob.datos())
ob.nombre="Pedro"
console.log(ob.datos())
ob.telefono="123456789"
console.log(ob.datos())