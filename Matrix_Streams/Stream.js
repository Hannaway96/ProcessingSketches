class Stream {

    constructor(symbolSize) {
        this.symbols = [];
        this.symbolCount = round(random(5, 25));       
        this.symbolSize = symbolSize;
        this.speed = random(2, 8);
    }

    generateSymbols(x, y) {
        let first = round(random(0, 1)) == 1;
        for (let i = 0; i < this.symbolCount; i++) {
            let symbol = new Symbol(x, y, this.speed, this.symbolSize);
            symbol.first = first;
            this.symbols.push(symbol);
            y-=this.symbolSize;
            first = false;
        }
    }

    show() {
        for (Symbol of this.symbols) {
            Symbol.show();
        }
    }
}