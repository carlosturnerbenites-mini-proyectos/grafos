class Vertice {
  constructor(id) {
    this.id = id;
    this.text = id;
    this.connectTo = {};
  }

  addNeighbor(neighbor, weighing = 0) {
    this.connectTo[neighbor.id] = weighing;
  }

  getConnections() {
    return Object.keys(this.connectTo);
  }

  getId() {
    return this.id;
  }

}


class Grafo {
  constructor() {
    this.listVertices = {};
    this.countVertices = 0;
  }

  addVertice(id) {
    this.countVertices = this.countVertices + 1;
    const newVertice = new Vertice(id);
    this.listVertices[id] = newVertice;


    return newVertice;
  }

  getVertice(n) {
    if (n in this.listVertices) {
      return this.listVertices[n];
    }
    return null;
  }

  addArista(fromVerticeId, toVerticeId, cost = 0) {
    const n = [];
    if (!(fromVerticeId in this.listVertices)) {
      n.push(this.addVertice(fromVerticeId));
    }
    if (!(toVerticeId in this.listVertices)) {
      n.push(this.addVertice(toVerticeId));
    }
    this.listVertices[fromVerticeId].addNeighbor(this.listVertices[toVerticeId], cost);

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
