class Ksiazka{
    
    constructor(tytul, autor, przeczytana){
        
        this.title = tytul;
        this.author = autor;
        this.ifRead = przeczytana;
            
    }
    
    opiszKsiazke(){
        let read = this.ifRead;
        function czyt(){
            
            if(read == true){
                return("przeczytana");
            }
            
            else{
                
                return("nieprzeczytana");

            }
        }
        
        
        let string = `Książka ma tytuł ${this.title}, autorem jest ${this.author} i została ${czyt()}`;
        return(string);
    }
    
}

let ksiazka1 = new Ksiazka('Wiedźmin','Andrzej Sapkowski',true);

let ksiazka2 = new Ksiazka('Włam się do mózgu','Radosław Kotarski',false);

let ksiazka3 = new Ksiazka('W pustyni i w puszczy','Henryk Sienkiewicz',false);


console.log(ksiazka1.opiszKsiazke());

console.log(ksiazka2.opiszKsiazke());

console.log(ksiazka3.opiszKsiazke());

let tablicaKsiazek = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tablicaKsiazek){
    
    let suma = 0;
    
    tablicaKsiazek.forEach(function(el, ind){
        
        if(tablicaKsiazek.ifRead===true){
            suma++;
            console.log("sjusnaxd");
        }
        else{
            console.log("nie przeczytano żadnych książek");
        }
        
    });
    console.log(suma);
   
}


iloscPrzeczytanych(tablicaKsiazek);