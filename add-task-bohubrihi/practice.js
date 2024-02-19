// Class(ES6) 
// Class is a template for creating objects

class Students {
    constructor (fname, lname, bday ){
        this.firstname = fname ;
        this.lastname = lname ;
        this.birthday = bday ;
    }

    fulname (){
        console.log(this.firstname, this.lastname);
    }
}


let student1 = new Students("Hasina"," Akter", "7 july 1998");
console.log(student1);
console.log(student1.fulname());

