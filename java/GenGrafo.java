public class GenGrafo{
    public static void main(String[]args){
        Grafo g = new Grafo();

        for(int i = 0; i <= 3 - 1; i++) {
            g.addVertice(i);
        }
        System.out.println(g);
        g.addArista(0,1,5);
        g.addArista(0,5,2);
        g.addArista(1,2,4);
        g.addArista(2,3,9);
        g.addArista(3,4,7);
        g.addArista(3,5,3);
        g.addArista(4,0,1);
        g.addArista(5,4,8);
        g.addArista(5,2,1);


        // g.listVertices.forEach((k, v) -> System.out.println("key: " + k + " value:" + v));

        // g.listVertices.forEach((key, vertice) -> System.out.println("key: " + key + " value:" + vertice) );
        g.listVertices.forEach((key, vertice) -> {
            System.out.println("vertice: " + vertice.getId());
            vertice.getConnections().forEach((key2, vecino) -> {
                System.out.println("to: " + vertice.getId() + " from:" + vecino);
            });
        });





        /*
        for v in g:
            for w in v.getConnections():
                print (w)
                print("( %s , %s )" % (v.getId(), w.getId()))
        */
    }
}
