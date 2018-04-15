class Vertice:
    def __init__(self,clave):
        self.id = clave
        self.text = clave;
        self.conectadoA = {}

    def addNeighbor(self,vecino,ponderacion=0):
        self.conectadoA[vecino] = ponderacion

    def __str__(self):
        return str(self.id) + ' conectadoA: ' + str([x.id for x in self.conectadoA])

    def getConnections(self):
        return self.conectadoA.keys()

    def getId(self):
        return self.id

    def obtenerPonderacion(self,vecino):
        return self.conectadoA[vecino]


class Grafo:
    def __init__(self):
        self.listVertices = {}
        self.countVertices = 0

    def addVertice(self,clave):
        self.countVertices = self.countVertices + 1
        nuevoVertice = Vertice(clave)
        self.listVertices[clave] = nuevoVertice
        return nuevoVertice

    def getVertice(self,n):
        if n in self.listVertices:
            return self.listVertices[n]
        else:
            return None

    def __contains__(self,n):
        return n in self.listVertices

    def addArista(self,de,a,costo=0):
        if de not in self.listVertices:
            nv = self.addVertice(de)
        if a not in self.listVertices:
            nv = self.addVertice(a)
        self.listVertices[de].addNeighbor(self.listVertices[a], costo)

    def getVertices(self):
        return self.listVertices.keys()

    def __iter__(self):
        return iter(self.listVertices.values())



g = Grafo()
for i in range(6):
    g.addVertice(i)

g.listVertices
g.addArista(0,1,5)
g.addArista(0,5,2)
g.addArista(1,2,4)
g.addArista(2,3,9)
g.addArista(3,4,7)
g.addArista(3,5,3)
g.addArista(4,0,1)
g.addArista(5,4,8)
g.addArista(5,2,1)

for v in g:
    for w in v.getConnections():
        print (w)
        print("( %s , %s )" % (v.getId(), w.getId()))
