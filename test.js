class Parser{
    constructor(str){
        this._str = str;
    }

    set str(str){
        this._str = str;
    }

    get str(){
        return this._str.split(':')
                        .filter(Number)
                        .map(s => s
                        .trim());
    }
}

const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';

const p = new Parser(phrase);

console.log(p.str)