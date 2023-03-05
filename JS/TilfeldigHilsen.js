//Funksjon, if else, Tilfeldig hilsen
function tilfeldigHilsen() {
  //Math finner eit tilfeldig tal mellom 0 og 100.  
    let tall = Math.floor(Math.random() * 101);
    //viss talet er mindre enn 30 sei den Hei.
    if (tall < 30) {
       document.write("Hei");
       }
       //viss talet er meir enn 50 sei den Hallo.
       else if (tall > 50 ) {
       document.write("Hallo");
        }
        //viss talet er i mellom 30 og 50 sei den God dag.
        else {
       document.write("God dag");
       }
   }
   // For å bruke funksjonen, skriver vi funksjonsnavnet
   tilfeldigHilsen();