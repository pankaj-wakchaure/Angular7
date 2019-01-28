
export class Company{

  private  _id:number;
  private  _name:string;
  private  _address:string;

   set id(id:number){
       this._id=id;
       console.log(" set Id ",id);

   } 
   set name(name:string){
       this._name=name;
   console.log(" set Name ",name);
       
    } 
   set address(address:string){
       this._address=address;
console.log(" set Address ",address);
       
   } 
    
    get id(){
      console.log(" get Id ",this._id);
                return this._id;
    }

    get name(){
      console.log(" get Name ",this._name);
                return this._name;
    }
get address(){
      console.log(" get Address ",this._address);
                return this._address;
    }
}//Company

