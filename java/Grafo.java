import java.util.*;

public class Grafo{

    public static void main(String[]args){}

    public int countVertices = 0;
    public HashMap<Integer, Vertice> listVertices = new HashMap<Integer, Vertice>();

    public Grafo(){
    }

    public Vertice addVertice(int id) {
        countVertices = countVertices + 1;
        Vertice newVertice = new Vertice(id);
        this.listVertices.put(id, newVertice);
        return newVertice;
    }

    public Vertice getVertice(int n){
        return this.listVertices.get(n);
    }

    public void addArista(int fromVerticeId,int toVerticeId, int cost){
        if (this.listVertices.get(fromVerticeId) == null){
            Vertice newVertice = this.addVertice(fromVerticeId);
        }
        if (this.listVertices.get(toVerticeId) == null){
            Vertice newVertice = this.addVertice(toVerticeId);
        }
        this.listVertices.get(fromVerticeId).addNeighbor(toVerticeId, cost);
    }

    public Set getVertices(){
        Set keys = this.listVertices.keySet();

        return keys;
    }
}
