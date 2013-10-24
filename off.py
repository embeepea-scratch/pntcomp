class Off:
    def __init__(self):
        self.vertDict = {}
        self.vertList = []
        self.faceList = []
    def coords_to_vert_string(self, p):
        return "%.4f %.4f %.4f" % (p[0], p[1], p[2])
    def vertex(self,p):
        """Return the index of a vertex with the given coords, adding the vertex to the list if necessary."""
        k = self.coords_to_vert_string(p)
        if k in self.vertDict:
            return self.vertDict[k]
        else:
            self.vertList.append(k)
            i = len(self.vertList) - 1
            self.vertDict[k] = i
            return i
    def add_face(self,verts):
        """Take a list of vertices (coords, not indices), and adds a face with those verts."""
        face = []
        for v in verts[:-1]: # omit last vertex (same as first)
            face.append(self.vertex(v))
        if len(face) > 0:
            self.faceList.append(face)
    def write(self, filename):
        with open(filename, "w") as f:
            f.write("OFF\n")
            f.write("%1d %1d 0\n" % (len(self.vertList), len(self.faceList)))
            for v in self.vertList:
                f.write(v + "\n")
            for faceverts in self.faceList:
                f.write("%1d %s\n" % (len(faceverts),
                                      " ".join(["%1d" % i for i in faceverts])))
        print "wrote %s" % filename
