Vue.component('ComponentPropi', {
    data: function() {
      return {
        text: 'DAW2'
      };
    },
    props: ['text2'],
    template: `
    <div>
      <h2 v-for>aaaaaaaaaaa</h2>
    </div>
    `
  });


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
  
  Vue.component('Fila', {
    props: {
      pilot: {
        type: Object
      }
    },
    template: `
      <li>
        <h3>Nom: <small>{{pilot.name}}</small></h3>
      </li>
    `
  });

  Vue.component('lletra', {
    computed: {
      pilots: function() {
        return this.$store.state.pilots;
      }
    },
    template: `
        
          <td> v-for="pilot in pilots" v-bind:key="pilot.url" v-bind:pilot="pilot" />
       
    `
  });