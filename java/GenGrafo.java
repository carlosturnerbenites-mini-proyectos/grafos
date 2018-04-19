public class GenGrafo{
    public static void main(String[]args){
        todo.Monitor m = new todo.Monitor();
        m.start();

        Grafo g = new Grafo();

        for(int i = 0; i <= 3 - 1; i++) {
            g.addVertice(i);
        }
        g.addArista(0,1,5);
        g.addArista(0,5,2);
        g.addArista(1,2,4);
        g.addArista(2,3,9);
        g.addArista(3,4,7);
        g.addArista(3,5,3);
        g.addArista(4,0,1);
        g.addArista(5,4,8);
        g.addArista(5,2,1);

        m.stop();


        g.listVertices.forEach((key, vertice) -> {
            System.out.println(vertice.getId() + " connectTo: " + vertice.getConnections());
            vertice.getConnections().forEach((key2, vecino) -> {
                System.out.println("( " + vertice.getId() + " , " + g.listVertices.get(key2).getId() + " )");
            });
        });
    }
}
