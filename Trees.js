const prompt = require("prompt-sync")({ sigint: true });


class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
addChild = (node) => {
      this.children.push(node);
  };

traverse = (child) => {
    let nodes = [this]; 
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
    if(currentNode.data.split(" ")[0] === child.data.split(` `)[1])
    return currentNode
    nodes = [...nodes, ...currentNode.children];
    }
  };
 }

const root = new TreeNode ("family");
let childName = prompt("Enter child full name (done if finished): ");
 while(childName !== "done"){
     const newNode = new TreeNode(childName);
     root.addChild(childName);
     var parent = root.traverse(newNode)
     console.log(parent)
     if(parent){
     if(root.children.length > 2){
     console.log("you can add only two childs")    
         }
         else{
         childName = prompt("Enter child full name (done if finished): "); }
    }
   childName = prompt("Enter child full name (done if finished): ")
 } 
console.log(parent)
root.traverse();