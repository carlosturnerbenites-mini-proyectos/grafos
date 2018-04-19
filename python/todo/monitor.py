# https://github.com/giampaolo/psutil

import psutil
import os

class Monitor():
    def __init__(self):
        self.i_memory = 0
        self.f_memory = 0
        self.u_memory = 0

        self.i_cpu = 0
        self.f_cpu = 0
        self.u_cpu = 0 # seconds

        self.i_disk = 0
        self.f_disk = 0
        self.u_disk = 0

        self.path = 'c:' if os.name == 'Windows' else '/';

    def getStats(self):
        milliseconds =  self.u_cpu * 1000
        print('usage cpu ' + str(milliseconds) + ' milliseconds')
        print('usage memory ' + str(self.u_memory) + ' bytes')
        print('usage disk ' + str(self.u_disk) + ' bytes')

    def start(self):
        self.i_memory = psutil.virtual_memory().available
        self.i_cpu = psutil.cpu_times().user
        self.i_disk = psutil.disk_usage(self.path).used

        """
        # memory
        psutil.virtual_memory().total
        psutil.virtual_memory().available
        psutil.virtual_memory().percent
        psutil.virtual_memory().used
        psutil.virtual_memory().free


        psutil.swap_memory().total
        psutil.swap_memory().percent
        psutil.swap_memory().used
        psutil.swap_memory().free
        """

        # cpu
        """
        psutil.cpu_times().user
        psutil.cpu_times().system
        psutil.cpu_times().nice
        psutil.cpu_times().idle

        psutil.cpu_count()
        psutil.cpu_count(logical=False)
        psutil.cpu_stats()
        psutil.cpu_freq().current
        psutil.cpu_freq().min
        psutil.cpu_freq().max
        """

        """
        # disk
        psutil.disk_usage(self.path).total
        psutil.disk_usage(self.path).used
        psutil.disk_usage(self.path).free
        psutil.disk_usage(self.path).percent
        """
    def stop(self):
        self.f_memory = psutil.virtual_memory().available
        self.f_cpu = psutil.cpu_times().user
        self.f_disk = psutil.disk_usage(self.path).used

        """
        process = psutil.Process(os.getpid())
        mem = process.memory_percent()
        self.u_memory = mem
        """

        self.u_memory = (self.i_memory - self.f_memory )
        self.u_cpu = self.f_cpu - self.i_cpu
        self.u_disk = self.f_disk - self.i_disk

        self.getStats()

        """
        # cpu
        print( psutil.cpu_times() )
        print( psutil.cpu_count() )
        print( psutil.cpu_count(logical=False) )
        print( psutil.cpu_stats() )
        print( psutil.cpu_freq() )

        # memory
        print( psutil.virtual_memory() )
        print( psutil.swap_memory() )

        # disk
        print( psutil.disk_usage(self.path) )
        """
