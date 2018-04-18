class Vertice:
    def __init__(self,id):
        self.id = id
        self.text = id;
        self.connectTo = {}

    def addNeighbor(self,neighbor,weighing=0):
        self.connectTo[neighbor] = weighing

    def __str__(self):
        return str(self.id) + ' connectTo: ' + str([x.id for x in self.connectTo])

    def getConnections(self):
        return self.connectTo.keys()

    def getId(self):
        return self.id



class Grafo:
    def __init__(self):
        self.listVertices = {}
        self.countVertices = 0

    def addVertice(self,id):
        self.countVertices = self.countVertices + 1
        newVertice = Vertice(id)
        self.listVertices[id] = newVertice
        return newVertice

    def getVertice(self,n):
        if n in self.listVertices:
            return self.listVertices[n]
        else:
            return None

    def __contains__(self,n):
        return n in self.listVertices

    def addArista(self,fromVerticeId,toVerticeId,cost=0):
        if fromVerticeId not in self.listVertices:
            newVertice = self.addVertice(fromVerticeId)
        if toVerticeId not in self.listVertices:
            newVertice = self.addVertice(toVerticeId)
        self.listVertices[fromVerticeId].addNeighbor(self.listVertices[toVerticeId], cost)

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
