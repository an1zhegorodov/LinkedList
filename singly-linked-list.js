function Node(name, next, data) {
    this.name = name;
    if (next !== null) {
        this.next = new Node(data[next].name, data[next].next, data);
    } else {
        this.next = next;
    }
}

var data = [
    {'name': 'val1', 'next': 1},
    {'name': 'val2', 'next': 2},
    {'name': 'val3', 'next': null}
];

var node = new Node(data[0].name, data[0].next, data);
// iterate nodes
while (node != null) {
    console.log(node.name);
    node = node.next;
}
