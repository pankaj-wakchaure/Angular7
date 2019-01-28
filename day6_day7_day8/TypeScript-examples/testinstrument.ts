
abstract class Instrument{
     abstract  play():void;	
}




class Piano extends Instrument{
public play():void{
console.log("Piano is palying  tan tan tan");	
}
}

class Guitar extends Instrument{
public play():void{
console.log("Guitar is palying  tin tin tin");	
}
}

class Flute extends Instrument{
public play():void{
console.log("Flute is palying  toot toot toot");	
}
}

let instruments:Array<Instrument>=new Array<Instrument>();

instruments.push(new Flute());
instruments.push(new Guitar());
instruments.push(new Piano());
instruments.push(new Guitar());
instruments.push(new Piano());
instruments.push(new Flute());
instruments.push(new Guitar());





for(var i in instruments)
{
if(instruments[i] instanceof Piano)
console.log("Piano is stored @ index "+i);
else 
if(instruments[i] instanceof Flute)
console.log("Flute is stored @ index "+i);
else 
if(instruments[i] instanceof Guitar)
console.log("Guitar is stored @ index "+i);
instruments[i].play();
}
