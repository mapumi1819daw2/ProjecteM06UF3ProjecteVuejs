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
        rutes: rutes
    },

    methods:{
            /* Inicialitzem array de caselles disponibles */
            campsDisponibles : function (num){

                
                
                for(var i = 0; i< num; i++){
                    dadesCompartides.dispo[i] = true;
                }

               
                   
            },


        /* Obtenim paraules i creem sopa de lletres */
            crearSopa : function (){
                var abc  =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
                var p1 = document.getElementById("p1");
                var p2 = document.getElementById("p2");
                var p3 = document.getElementById("p3");



                var paraules =  [p1.value , p2.value, p3.value];

                paraules = ["Marc", "Jordi", "Abracadabra"];
                
                var t = [paraules[0].length,paraules[1].length, paraules[2].length];

              

                var num = 5;

                var totalLletres = num*num;

                

               


               this.campsDisponibles(totalLletres);
                console.log(dadesCompartides.dispo);

          
                
                
            
               
            },


            clicmenu: function($event){
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