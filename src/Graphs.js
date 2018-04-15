class Vertice{
  constructor(clave) {
    this.id = clave;
    this.text = clave;
    this.conectadoA = {};
  }

  agregarVecino(vecino, ponderacion = 0) {
    this.conectadoA[vecino.id] = ponderacion;
  }

  obtenerConexiones() {
    return Object.keys(this.conectadoA);
  }

  obtenerId() {
    return this.id;
  }

  obtenerPonderacion(vecino) {
    return this.conectadoA[vecino];
  }
}


class Grafo{

  constructor() {
    this.listaVertices = {};
    this.numVertices = 0;
  }

  agregarVertice(clave) {

    this.numVertices = this.numVertices + 1;
    let nuevoVertice = new Vertice(clave);
    this.listaVertices[clave] = nuevoVertice;
    return nuevoVertice;
  }

  obtenerVertice(n) {

    if (n in this.listaVertices) {
      return this.listaVertices[n]
    }else{
      return None
    }
  }

  __contains__(n) {
    return n in this.listaVertices;
  }

  agregarArista(de, a, costo = 0) {

    if (!(de in this.listaVertices)) {
      // nv =
      this.agregarVertice(de);
    }
    if (!(a in this.listaVertices)) {
      // nv =
      this.agregarVertice(a);
    }
    this.listaVertices[de].agregarVecino(this.listaVertices[a], costo);
  }

  obtenerVertices() {
    return Object.keys(this.listaVertices);
  }

}


const g = new Grafo();
for( const i in [1, 2, 3, 4, 5, 6]) {
  g.agregarVertice(i);
}

console.log(g.listaVertices);

g.agregarArista(0, 1, 5);
g.agregarArista(1, 2, 2);
g.agregarArista(2, 3, 4);
g.agregarArista(3, 4, 9);
g.agregarArista(4, 5, 7);
g.agregarArista(5, 0, 3);

export {
  g,
};
