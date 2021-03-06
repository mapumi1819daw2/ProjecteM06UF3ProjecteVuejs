Vue.component('Info',{
  data: function () {
    return {
      show: true,
    }
  },
  template: `
    <div>
  <button v-on:click="show = !show">
        <a v-if="show">
          Oculta
        </a>
        <a v-else>
          Mostra
        </a>
      </button>
      <transition name="fade">
  <p v-if="show">
  <em>Pots introduir paraules i escollir "Sopa de lletres"
          o bé, clicar a "Sopa de lletres" directament i jugar amb
          paraules del sistema
        </em></p>
        </transition>

        </div>
  `
});



Vue.component('ComponentPropi', {
    
    props: ['text'],
    template: `
    <div>
      <a>{{text}}</a>
    </div>
    `
  });



  /* Component taula */
  Vue.component('Taula', {
    
    computed: {
      lletres: function() {
        return this.$store.state.sopa;
      },
      tamanySopa: function(){
        return this.$store.state.tamanySopa;
      },

      sopa: function(){
        return this.$store.state.sopa;
      },

      fila: function(){
        return this.$store.state.fila;
      },
      columna: function(){
        return this.$store.state.columna;
      },
    },

    template: `
      <div>
        <h2>Sopa de lletres</h2>

    
        <table>

        <tbody>

        <tr v-for="lletra in lletres">

          
          <Fila v-for="l in lletra" v-bind:lletre="l"></Fila>
          
        </tr>
        </tbody>
        </table>
        
          
       
      </div>
    `
  });
  

  /* Component Fila */
  Vue.component('Fila', {

    /* props:{
      lletres: Array,
      lletra: String,
    },
 */
    props: {
      lletre: String,
      
    },

    store,
    
    template: `

      <td v-on:click.stop="this.$store.dispatch({type: 'setLletraSeleccionada' });">{{lletre}}</td>


     
      
    `
  });



  /* Component lletra */
/*   Vue.component('lletra', {

    props: ['lletra'],
    
    template: `
        
          <td>{{lletra}}</td>
       
    `
  }); */