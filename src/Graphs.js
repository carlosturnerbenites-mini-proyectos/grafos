class Vertice {
  constructor(clave) {
    this.id = clave;
    this.text = clave;
    this.conectadoA = {};
  }

  addNeighbor(vecino, ponderacion = 0) {
    this.conectadoA[vecino.id] = ponderacion;
  }

  getConnections() {
    return Object.keys(this.conectadoA);
  }

  getId() {
    return this.id;
  }

  obtenerPonderacion(vecino) {
    return this.conectadoA[vecino];
  }
}


class Grafo {
  constructor() {
    this.listVertices = {};
    this.countVertices = 0;
  }

  addVertice(clave) {
    // alert("hola")
    this.countVertices = this.countVertices + 1;
    const nuevoVertice = new Vertice(clave);
    this.listVertices[clave] = nuevoVertice;


    return nuevoVertice;
  }

  getVertice(n) {
    if (n in this.listVertices) {
      return this.listVertices[n];
    }
    return null;
  }

  __contains__(n) {
    return n in this.listVertices;
  }

  addArista(de, a, costo = 0) {
    const n = [];
    if (!(de in this.listVertices)) {
      // nv =
      n.push(this.addVertice(de));
    }
    if (!(a in this.listVertices)) {
      // nv =
      n.push(this.addVertice(a));
    }
    this.listVertices[de].addNeighbor(this.listVertices[a], costo);
    return {
      news: n,
    };
  }

  getVertices() {
    return Object.keys(this.listVertices);
  }

}


export {
  Vertice,
  Grafo,
};
