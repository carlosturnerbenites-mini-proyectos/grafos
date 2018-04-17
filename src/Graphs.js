import { sleep, diagram} from './utils';
class Vertice {
  constructor(id) {
    this.id = id;
    this.text = id;
    this.connectTo = {};

    console.log(window.appVue)
    if ( window.appVue && window.appVue.$refs.app.debug ){
      diagram.setCurrent('Vertice__constructor');
      sleep();
    }
  }

  addNeighbor(neighbor, weighing = 0) {
    this.connectTo[neighbor.id] = weighing;

    console.log(window.appVue)
    if ( window.appVue && window.appVue.$refs.app.debug ){
      diagram.setCurrent('Vertice__addNeighbor');
      sleep();
    }
  }

  getConnections() {
    return Object.keys(this.connectTo);
  }

  getId() {
    return this.id;
  }

  obtenerPonderacion(neighbor) {
    return this.connectTo[neighbor];
  }
}


class Grafo {
  constructor() {
    this.listVertices = {};
    this.countVertices = 0;

    console.log(window.appVue)
    if ( window.appVue && window.appVue.$refs.app.debug ){
      diagram.setCurrent('Grafo__constructor');
      sleep();
    }
  }

  addVertice(id) {
    this.countVertices = this.countVertices + 1;
    const newVertice = new Vertice(id);
    this.listVertices[id] = newVertice;

    console.log(window.appVue)
    if ( window.appVue && window.appVue.$refs.app.debug ){
      diagram.setCurrent('Grafo__addVertice');
      sleep();
    }

    return newVertice;
  }

  getVertice(n) {
    if (n in this.listVertices) {
      return this.listVertices[n];
    }
    return null;
  }

  addArista(de, a, cost = 0) {
    const n = [];
    if (!(de in this.listVertices)) {
      n.push(this.addVertice(de));
    }
    if (!(a in this.listVertices)) {
      n.push(this.addVertice(a));
    }
    this.listVertices[de].addNeighbor(this.listVertices[a], cost);

    console.log(window.appVue)
    if ( window.appVue && window.appVue.$refs.app.debug ){
      diagram.setCurrent('Grafo__addArista');
      sleep();
    }

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
