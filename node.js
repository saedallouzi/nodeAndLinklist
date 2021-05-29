class Node {
    constructor(age,highlight,nextNode = null){
    this.age = age
    this.highlight = highlight
    this.nextNode = nextNode
}
}

class linkedlist{
    constructor(age,highlight){
        this.head = new Node(age,highlight);
    }
    insertBegining = (age,highlight)=>{
        const Node = new Node(age,highlight,this.head);
        this.head = Node;
    };
    gitlinklist= () =>{
        let current =this.head
        while(current){
            console.log(`year : ${current.age} , highlight : ${current.highlight}`)
            current = current.nextNode
        }
    }

    inserthighlight = () =>{
        let current = this.head
        while(current.age < age ){
            let currentAge = current.age + 1 
            if(current.nextNode && current.nextNode.age === currentAge){
            current = current.nextNode;
            }
            else {
                let highlight = prompt(`enter highlight for year : ${currentAge} : `)
                let newNode = newNode(currentAge,highlight,current.nextNode)
                current.newNode = newNode
                current = newNode;
            }
        }


    }
}

const agelist = new linkedlist(7, " i was seven");
agelist.insertBegining(3, "i start walking");
agelist.insertBegining(1, "i was born");

let age = prompt(" age : ");
agelist.inserthighlight(age);
agelist.linkedlist()

