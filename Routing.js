//Ruta demanem paraules
const escriureParaules = {

    template: `
    <div >
    <p>
        <strong>Introdueix 3 paraules per a la sopa</strong>
    </p>
   
        Primera paraula: <input type="text" id="p1"><br><br>
        Segona paraula: <input type="text" id="p2"><br><br>
        Tercera paraula: <input type="text" id="p3"><br><br>
        <a href="#/sopa" v-on:click="crearSopa" id="jugar">Jugar</a>

    
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
    '#/sopa': sopa,
};




/* 

    VUE


*/
  var app = new Vue({
    el: '#app',
    data: {
        vistaMenu: true,
        rutaActual: window.location.hash,
        rutes: rutes,
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
                
                var t = [paraules[0].length,paraules[1].length, paraules[2].length];

              

                var num = 5;

                var totalLletres = num*num;

                


               this.campsDisponibles(totalLletres);
                console.log(dadesCompartides.dispo);

          
                this.vistaMenu = !this.vistaMenu;
                
            
                console.log(this.vistaMenu);
            }
    },


    computed: {
        vistaActual: function() {
          alert("ruta "+this.rutaActual);
          return this.rutes[this.rutaActual] || this.rutes['#/'];
        }
      },

    template: `
    <div>
    <div v-show="vistaMenu">
    <p>
        <strong>Introdueix 3 paraules per a la sopa</strong>
    </p>
   
        Primera paraula: <input type="text" id="p1"><br><br>
        Segona paraula: <input type="text" id="p2"><br><br>
        Tercera paraula: <input type="text" id="p3"><br><br>
        <button v-on:click="crearSopa" id="jugar">Jugar</button>

    
    </div>

   
    <componentPropi v-show="vistaMenu == false">Sopa</componentPropi>
    </div>
    

        `
});