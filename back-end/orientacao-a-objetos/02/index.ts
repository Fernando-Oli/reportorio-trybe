class Superclass {
    isSuper: true;
    constructor(isSuper:true){
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Olá mundo!')
    }
}

class Subclass extends Superclass {

}
