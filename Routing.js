
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
    template: `<ComponentPropi>Sopa</ComponentPropi>`
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

    methods:{
            /* Inicialitzem array de caselles disponibles */
            campsDisponibles : function(num){  
                for(var i = 0; i< num; i++){
                  this.compartides.dispo[i]= [];
                }
                
                for(var i = 0; i <num; i++){
                  for(var x =0; x< num; x++){
                    this.compartides.dispo[i].push(true);
                  }
                  
                }
                console.log(this.compartides.dispo);
                   
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
                var qLletres = 0;
                for(var i=0; i<this.compartides.paraules.length; i++ ){

                  var paraula = this.split(this.compartides.paraules[i]);
                  qLletres = paraula.length;
                  
                    console.log(qLletres);
                }
            },

            /* Obtenim les lletres de la paraula */
            split: function(paraula){
                return paraula.split("");
            },

            obtenirFila: function (){

              Math.floor(Math.random() * this.compartides.tamanySopa-1);

            },


            obtenirColumna: function(){
              Math.floor(Math.random() * this.compartides.tamanySopa-1);
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

               this.campsDisponibles(num);

               this.distribuirParaules();


               
            },


            clicmenu: function($event){
              this.crearSopa();
              this.rutaActual = $event.target.hash;
            }
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