#! /usr/bin/env python

import re
import numpy as np

class LinearFloatIntInterpolator:
    def __init__(self, amin, astep):
        self.amin = amin
        self.astep = astep
    def float_to_int(self, a):
        return int(round((a - self.amin) / self.astep))
    def int_to_float(self, i):
        return self.amin + i*self.astep

class PntFile:
    def __init__(self, filename=None):
        self.npoints = 469758
        self.a = np.zeros((self.npoints,3))
        if filename is not None:
            self.filename = filename
            i = 0
            with open(filename, "r") as f:
                for line in [line.strip() for line in f.readlines()]:
                    y,x,t = [float(s) for s in re.split(r'\s+', line)]
                    self.a[i,0] = x
                    self.a[i,1] = y
                    self.a[i,2] = t
                    i = i + 1
    def write(self,filename):
        with open(filename, "w") as f:
            for i in range(0,len(self.a)):
                f.write("%8.4f %9.4f  %7.2f\n" % (self.a[i,1], self.a[i,0], self.a[i,2]))
    @staticmethod
    def avg(filenames):
        presult = PntFile()
        pfiles = []
        for filename in filenames:
            print "loading %s" % filename
            pfiles.append(PntFile(filename))
        nfiles = len(pfiles)
        print "computing average"
        for i in range(0,presult.npoints):
            presult.a[i,0] = pfiles[0].a[i,0] # x
            presult.a[i,1] = pfiles[0].a[i,1] # y
            presult.a[i,2] = sum( [ p.a[i,2] for p in pfiles ] ) / nfiles
        return presult
    @staticmethod
    def subtract(filename_a,filename_b):
        presult = PntFile()
        print "loading %s" % filename_a
        pfile_a = PntFile(filename_a)
        print "loading %s" % filename_b
        pfile_b = PntFile(filename_b)
        print "computing difference"
        for i in range(0,presult.npoints):
            presult.a[i,0] = pfile_a.a[i,0] # x
            presult.a[i,1] = pfile_a.a[i,1] # y
            presult.a[i,2] = pfile_a.a[i,2] - pfile_b.a[i,2]
        return presult

class PntGrid:
    def __init__(self):
        self.width    = 1385 # width nX
        self.height   = 596  # height nY
        self.gridsize = 1/24.0
        self.minX     = -124.6875
        self.minY     = 24.5625
        self.xTr      = LinearFloatIntInterpolator(self.minX, self.gridsize)
        self.yTr      = LinearFloatIntInterpolator(self.minY, self.gridsize)
    def load_pntfile(self,pntfile):
        self.a = np.empty((self.height,self.width))
        self.a.fill(np.nan)
        used = {}
        n = 0
        for p in pntfile.a:
            i = self.yTr.float_to_int(p[1])
            j = self.xTr.float_to_int(p[0])
            k = "%1d,%1d" % (i,j)
            if k in used:
                print "warning: duplication for k=%s" % k
            else:
                used[k] = True
            try:
                self.a[i,j] = p[2]
            except IndexError:
                print "index out of range for k=%s" % k
