import java.util.*;

public class Vertice{
    public int id;
    public int text;
    public HashMap<Integer, Integer> connectTo = new HashMap<Integer, Integer>();

    public void Vertice(int id){
        this.id = id;
        this.text = text;
    }

    public void addNeighbor(int neighbor,int weighing){
        this.connectTo.put(neighbor,weighing);
    }

    public Set getConnections(){
       Set keys = this.connectTo.keySet();

        return keys;
    }

    public int getId(){
        return this.id;
    }
}
