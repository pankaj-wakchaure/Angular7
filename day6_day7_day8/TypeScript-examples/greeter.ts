class Greeter {
    private _greeting: string;

    constructor(message?: string) {
        this._greeting = message;
    }
    
    set greeting(s:string){
        this._greeting=s;
    }
    get greeting():string{
        return this._greeting;
    }




}

let greeter: Greeter;
greeter = new Greeter();

greeter.greeting="Hi";
console.log(greeter.greeting);

