function SinglyLinkedList(data) {
    this.nodes = {};
    for(i in data) {
        this.nodes[data[i].id] = {'name': data[i].name, 'next': data[i].next}
    }
}
SinglyLinkedList.prototype.add = function (node) {
    this.nodes[node.id] = {'name': name, 'next': next};
}
SinglyLinkedList.prototype.getList = function () {
    return this.nodes;
}
SinglyLinkedList.prototype.iterate = function(firstId) {
    var node = this.nodes[firstId];
    while (node != undefined) {
        console.log(node.name);
        node = this.nodes[node.next];
    }
}
SinglyLinkedList.prototype.removeAfter = function (id) {
    var rnode = this.nodes[this.nodes[id].next];
    this.nodes[id].next = rnode.next;
    delete rnode;
}
SinglyLinkedList.prototype.insertAfter = function (afterId, node) {
    node.next = this.nodes[afterId].next;
    this.nodes[afterId].next = node.id;
    this.nodes[node.id] = node;
}

var list = new SinglyLinkedList([{'id': 1, 'name': 'val1', 'next': 2}, {'id': 2, 'name': 'val2', 'next': null}]);
list.iterate(1);
console.log('============');
list.insertAfter(1, {'id': 8, 'name': 'val8'});
list.iterate(1);
