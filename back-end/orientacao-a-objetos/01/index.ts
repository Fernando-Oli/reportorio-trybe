class TV {
    model: string;
    brand: string;
    inches: number;
    cost: number;
    resoluction: number;
    connectedTo: string;
    constructor(m: string, b: string, i: number, c: number, r: number, ct: string) {
        console.log(`Buying a TV ${m} for ${c}`);
        this.model = m;
        this.brand = b;
        this.inches = i;
        this.cost = c;
        this.resoluction = r;
        this.connectedTo = ct;
    }
    turnOn() {
        console.log(`this ${this.model} with a resoluction of ${this.resoluction}has been turn on`)
    }
}

const tv1 = new TV('S2', 'Samsung', 10, 2000, 1280, 'Netflix, Prime, Youtube and Spotify');
console.log(tv1.model, tv1.connectedTo);
tv1.turnOn();