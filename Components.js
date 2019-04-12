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
      pilots: function() {
        return this.$store.state.pilots;
      }
    },
    template: `
      <div>
        <h2>Sopa de lletres</h2>
        
          <PilotItem v-for="pilot in pilots" v-bind:key="pilot.url" v-bind:pilot="pilot" />
       
      </div>
    `
  });
  

  /* Component Fila */
  Vue.component('Fila', {
    
    template: `
      <tr></tr>
    `
  });



  /* Component lletra */
  Vue.component('lletra', {

    props: ['lletra'],
    
    template: `
        
          <td>{{lletra}}</td>
       
    `
  });