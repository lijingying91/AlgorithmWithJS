/**
 * 【图】
 * 如果一个 图的顶点对是有序的，则可以称之为有向图。
 * 如果图是无序的，则称之为无序图，或无向图
 * 概念：路径、环、
 */

function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push(" ");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs; // 深度优先搜索
    this.bfs = bfs; // 广度优先搜索
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + "->");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}
/**
 * 深度优先
 * @param {Number} v 
 */
function dfs (v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}
/**
 * 广度优先
 * @param {Number} s 
 */
function bfs (s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        var v = queue.shift();
        if (v == undefined) {
            console.log("Visited vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}
/**
 * 确定路径
 * @param {String} v 
 */
function pathTo(v) {
    var source = 0;
    console.log(v);
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}

module.exports = Graph;