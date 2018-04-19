/*
https://docs.oracle.com/javase/7/docs/api/java/lang/Runtime.html#freeMemory()
https://www.tutorialspoint.com/java/lang/system_currenttimemillis.htm
https://www.mkyong.com/java/how-to-get-free-disk-space-in-java/
*/

package todo;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;
import java.io.File;


public class Monitor {

    long i_memory = 0;
    long f_memory = 0;
    long u_memory = 0;

    long i_cpu = 0;
    long f_cpu = 0;
    long u_cpu = 0;

    long i_disk = 0;
    long f_disk = 0;
    long u_disk = 0;

    Runtime runtime = Runtime.getRuntime();

    String path = System.getProperty("os.name").toLowerCase().contains("windows") ? "c:" : "/";

    public static void main(String[] args) {

    }

    public void getStats(){
        System.out.println("usage cpu " + this.u_cpu + " milliseconds");
        System.out.println("usage memory " + this.u_memory + " bytes");
        System.out.println("usage disk " + this.u_disk + " bytes");
    }
    public void start(){
        File file = new File(this.path);

        //this.runtime.gc();
        this.set_i_memory(runtime.freeMemory());

        // System.nanoTime()
        this.set_i_cpu(System.currentTimeMillis());

        this.set_i_disk(file.getFreeSpace());
    }
    public void stop(){
        File file = new File(this.path);

        this.set_f_memory(runtime.freeMemory());
        // System.nanoTime()
        this.set_f_cpu(System.currentTimeMillis());
        this.set_f_disk(file.getFreeSpace());

        this.set_u_memory(this.get_i_memory() - this.get_f_memory());

        this.set_u_cpu(this.get_f_cpu() - this.get_i_cpu());
        this.set_u_disk(this.get_i_disk() - this.get_f_disk());

        this.getStats();
    }
    public void set_i_memory(long i_memory){
        this.i_memory = i_memory;
    }
    public void set_f_memory(long f_memory){
        this.f_memory = f_memory;
    }
    public void set_f_disk(long f_disk){
        this.f_disk = f_disk;
    }

    public void set_i_cpu(long i_cpu){
        this.i_cpu = i_cpu;
    }
    public void set_f_cpu(long f_cpu){
        this.f_cpu = f_cpu;
    }
    public void set_i_disk(long i_disk){
        this.i_disk = i_disk;
    }

    public void set_u_memory(long u_memory){
        this.u_memory = u_memory;
    }
    public void set_u_cpu(long u_cpu){
        this.u_cpu = u_cpu;
    }
    public void set_u_disk(long u_disk){
        this.u_disk = u_disk;
    }

    public long get_i_memory(){
        return this.i_memory;
    }
    public long get_f_memory(){
        return this.f_memory;
    }
    public long get_f_disk(){
        return this.f_disk;
    }

    public long get_f_cpu(){
        return this.f_cpu;
    }
    public long get_i_cpu(){
        return this.i_cpu;
    }
    public long get_i_disk(){
        return this.i_disk;
    }

    public long get_u_memory(){
        return this.u_memory;
    }
    public long get_u_cpu(){
        return this.u_cpu;
    }
    public long get_u_disk(){
        return this.u_disk;
    }

}
