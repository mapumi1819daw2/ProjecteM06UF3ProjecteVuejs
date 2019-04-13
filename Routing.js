
//Ruta demanem paraules
const escriureParaules = {

    template: `
    <div >
    <p>
        <strong>Introdueix 3 paraules per a la sopa</strong>
        <p><em>Pots introduir paraules i escollir "Sopa de lletres"
          o bé, clicar a "Sopa de lletres" directament i jugar amb
          paraules del sistema
        </em></p>
    </p>
   
        Primera paraula: <input type="text" id="p1"><br><br>
        Segona paraula: <input type="text" id="p2"><br><br>
        Tercera paraula: <input type="text" id="p3"><br><br>
        

    
    </div>
    `
  };

//Ruta sopa
  const sopa ={


    
    
    template: `<Taula></Taula>`
  }

  /* 

RUTES

*/
const rutes = {
    '#/': escriureParaules,
    '#/sopa': sopa
};



/* 

    VUE


*/
  var app = new Vue({
    el: '#app',
    data: {
        rutaActual: window.location.hash,
        rutes: rutes,
        compartides: dadesCompartides,
    },

    store,

    methods:{
            /* Inicialitzem array de caselles disponibles */
            inicialitzarCampsDisponibles : function(num){  
                for(var i = 0; i< num; i++){
                  this.compartides.sopa[i]= [];
                  this.compartides.dispo[i]= [];
                }
                
                for(var i = 0; i <num; i++){
                  for(var x =0; x< num; x++){
                    this.compartides.sopa[i].push(null);
                    this.compartides.dispo[i].push(true);
                  }
                  
                }
               
                   
            },


            paraulesMajuscules: function(){
              for(var i=0; i<this.compartides.paraules.length; i++ ){
                this.compartides.paraules[i] = this.compartides.paraules[i].toUpperCase();
                    
              }
            },


            paraulaMesLlarga: function(){
              for(var i =0; i<this.compartides.tamanyParaules.length; i++){
                if(this.compartides.tamanyParaules[i]> this.compartides.tamanySopa){
                  this.compartides.tamanySopa = this.compartides.tamanyParaules[i];
                }
              }
            },



            distribuirParaules: function(){
               
                for(var i=0; i<this.compartides.paraules.length; i++ ){

                  this.compartides.paraula = this.split(this.compartides.paraules[i]);
                 
                  this.compartides.tamanyParaula = this.compartides.tamanyParaules[i];
                   console.log(this.compartides.tamanyParaula);
                   this.obtenirOrientacio();
                  // console.log("Horitzontal? "+this.compartides.horitzontal);

                   
                  
                   

                  /* 
                  
                  *
                  *
                  * *HORITZONTAL
                  * *
                  * *
                  * 
                  
                  
                   */
                  if(this.compartides.horitzontal){
                    this.obtenirFila();
                    console.warn("HORITZONTAL");
                    console.log("Paraula "+this.compartides.paraula);
                    console.log("Fila "+this.compartides.fila);
                    console.log("Columna "+this.compartides.columna);
                    console.log("Mostra? "+this.compartides.mostra);
                    console.log("Esapis disponibles "+this.compartides.espaisDisponiblesParaula);
                    console.log("Fila "+this.compartides.fila);
                    this.esPotMostrar();

                  //  console.log("Es pot horitzontal:" +this.compartides.mostra);
                    if(!this.compartides.mostra){

                      do{
                        this.obtenirFila();
                        this.esPotMostrar();

                        
                      }while(!this.compartides.mostra && this.compartides.espaisDisponiblesParaula == this.compartides.tamanyParaula);
                    }
                     
                      
                      this.dibuixarParaula();

                      this.compartides.espaisDisponiblesParaula = 0;
                      


                      console.warn("HORITZONTAL");
                      console.log("POST Paraula "+this.compartides.paraula);
                      console.log("POST Fila "+this.compartides.fila);
                      console.log("POST Columna "+this.compartides.columna);
                      console.log("POST Mostra? "+this.compartides.mostra);
                      console.log("POST Esapis disponibles "+this.compartides.espaisDisponiblesParaula);
                      console.log("POST Fila "+this.compartides.fila);

                      this.compartides.mostra= false;

                      

                 
                  }



                  /**
                   * 
                   *  VERTICAL
                   * 
                   * 
                   */
                  else{

                    this.obtenirColumna();
                    this.esPotMostrar();
                    console.log("Columna "+this.compartides.columna);
                    console.log("V, mostra?"+this.compartides.mostra);
                    if(!this.compartides.mostra){

                      do{
                        this.obtenirColumna();
                        this.esPotMostrar();
                        console.log("vertical");
                        console.log(this.compartides.mostra);
                        console.log("this.compartides.espaisDisponiblesParaula "+this.compartides.espaisDisponiblesParaula);
                        console.log("this.compartides.tamanyParaula "+this.compartides.tamanyParaula);
                        
                      }while(!this.compartides.mostra && this.compartides.espaisDisponiblesParaula == this.compartides.tamanyParaula);
                    }
                      
                      this.dibuixarParaula();
                      console.log("vertical");
                      console.log(this.compartides.paraula);
                      console.log(this.compartides.mostra);
                      this.compartides.mostra= false;
                      this.compartides.espaisDisponiblesParaula = 0;
                  }

                   


                }



                this.completarSopa();
            },



            completarSopa: function(){

              for(i =0; i < this.compartides.tamanySopa; i++){
                for(x =0; x < this.compartides.tamanySopa; x++ ){
                   if(this.compartides.sopa[i][x]==null){
                  var lletra = Math.floor(Math.random() * (this.compartides.abc.length-1 -0)+0);
                  console.log("lletra ["+lletra+"] "+this.compartides.abc[lletra] );
                  console.log("i "+i );
                  console.log("x "+x );
                  console.log(this.compartides.sopa);
                  this.compartides.sopa[i][x]= this.compartides.abc[lletra];
                }
                }
               
                    

                
              }

            },


            dibuixarParaula: function(){
              var i =0;

             
              if(this.compartides.horitzontal){
                for(x=this.compartides.columna; x< this.compartides.columna+this.compartides.tamanyParaula; x++){
                 
                    this.compartides.sopa[this.compartides.fila][x] = this.compartides.paraula[i++];
                
                }
              }

              else{
                for(x=this.compartides.fila; x< this.compartides.fila+this.compartides.tamanyParaula; x++){
                  console.warn(this.compartides.sopa);
                  console.warn("fila: "+x);
                  console.warn("columna: "+this.compartides.columna);
                  console.warn("lletra: ["+i+"]"+this.compartides.paraula[i]);
                 
                  this.compartides.sopa[x][this.compartides.columna] = this.compartides.paraula[i++];
              
              }
              }

             

            },

            /* Obtenim les lletres de la paraula */
            split: function(paraula){
                return paraula.split("");
            },

            obtenirFila: function (){

              this.compartides.fila = Math.floor(Math.random() * (this.compartides.tamanySopa-1 -0)+0);

            },


            obtenirColumna: function(){
              this.compartides.columna = Math.floor(Math.random() * (this.compartides.tamanySopa-1 -0)+0);
            },


            obtenirOrientacio: function(){
                this.compartides.horitzontal = !this.compartides.horitzontal;
              
            },


            esPotMostrar: function(){

              if(this.compartides.horitzontal){
                for(var i = 0; i< this.compartides.tamanySopa; i++){

                  switch(this.compartides.sopa[this.compartides.fila][i]){
                    case null:
                     
                    this.compartides.espaisDisponiblesParaula++;
                      this.compartides.mostra = true;
                      console.log("es pot null espais disponibles["+this.compartides.fila+"]["+i+"]"+this.compartides.espaisDisponiblesParaula);
                      console.log("es pot null MOSTRA?["+this.compartides.fila+"]["+i+"]"+this.compartides.mostra);
                    


                      
                      break;
                    default:
                    
                    this.compartides.espaisDisponiblesParaula= 0;
                    this.compartides.mostra = false;
                    this.compartides.columna = i+1;
                    console.log("es pot OCUPAT espais disponibles["+this.compartides.fila+"]["+i+"]"+this.compartides.espaisDisponiblesParaula);
                    console.log("es pot OCUPAT MOSTRA?["+this.compartides.fila+"]["+i+"]"+this.compartides.mostra);
                    
                      break;

                  }

                }
              }

              else{
                for(var i = 0; i< this.compartides.tamanySopa; i++){
                    console.log("Columna lliure: "+this.compartides.sopa[i][this.compartides.columna]);
                  switch(this.compartides.sopa[i][this.compartides.columna]){
                    case null:
                    this.compartides.espaisDisponiblesParaula++;
                    this.compartides.mostra = true;
                   
                   
                      break;
                    default:

                    this.compartides.espaisDisponiblesParaula= 0;
                    this.compartides.files = i+1;
                    this.compartides.mostra = false;

                    
                    
                      break;

                  }

                }
              }

            },


        /* Obtenim paraules i creem sopa de lletres */
            crearSopa: function (){
               /*  var p1 = document.getElementById("p1");
                var p2 = document.getElementById("p2");
                var p3 = document.getElementById("p3");
 */


                //var paraules =  [p1.value , p2.value, p3.value];

                this.compartides.paraules = ["Marc", "Jordi", "Joan"];

                this.paraulesMajuscules();

                console.log(this.compartides.paraules);
                
                this.compartides.tamanyParaules = [this.compartides.paraules[0].length,this.compartides.paraules[1].length, this.compartides.paraules[2].length];
                
                this.paraulaMesLlarga();

                this.compartides.tamanySopa *=2;
                var num = this.compartides.tamanySopa;

               this.inicialitzarCampsDisponibles(num);

               this.distribuirParaules();


               console.log(this.compartides.sopa);





               /* Actualitzem estat del store */
              this.actualitzaEstatStore();



               
            },


            clicmenu: function($event){
              this.crearSopa();
              this.rutaActual = $event.target.hash;
            },


            actualitzaEstatStore: function(){
              this.$store.dispatch({type: 'setTamanySopa', tamanySopa: this.compartides.tamanySopa });
              this.$store.dispatch({type: 'setSopa', sopa: this.compartides.sopa });
            },
    },


    computed: {
        vistaActual: function() {
          console.log("ruta "+this.rutaActual);
          return this.rutes[this.rutaActual] || escriureParaules;
        }
      },

    template: `
    <div>

    <ul>
        <li>
          <a href="#/" 
            v-on:click="clicmenu">
              Menú incial
          </a>
        </li>
        <li>
          <a href="#/sopa" 
            v-on:click="clicmenu">
              Sopa de lletres
          </a>
        </li>
      </ul>

      <div v-bind:is="vistaActual">        
      </div>
        
    </div>
    

        `
});