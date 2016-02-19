function Person() {
    this.result;
    this.name;
}


Person.prototype.setName = function (name) {
    this.name = "My Name Is " + name;
}



var GLOBAL_P_NAME;

function createPeople() {
    return {};
}

function setName(people) {
    people.name = "My Name Is " + GLOBAL_P_NAME;
}

var p = createPeople();
P_NAME = "p";
setName(p);
console.log(p.name);


var p1 = createPeople();
P_NAME = "p1";
setName(p1);
console.log(p1.name);
