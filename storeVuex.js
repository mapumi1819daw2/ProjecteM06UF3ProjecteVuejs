var store = new Vuex.Store({

    //DADES
    state: {
        tamanySopa: 0,
        sopa : [],
        lletra: null,
        fila: 0,
        columna: 0,
    },


    mutations: {
        /* Mètode fer fer el canvi d'estat de la sopa */
        setSopa: function(state, payload){
            state.sopa = payload.sopa;
        },
        /* Mètode fer fer el canvi d'estat del tamany */
        setTamanySopa: function(state, payload){
            state.tamanySopa = payload.tamanySopa;
        },

        setFila: function(state, payload){
            state.fila = payload.fila;
        },

        setColumna: function(state, payload){
            state.columna = payload.columna;
        },

        
    },


    //SOL·LICITEM CANVIS D'ESTAT
    actions: {

        /* Passem l'array sopa */
        setSopa: function(context, payload){

            context.commit('setSopa', {sopa: payload.sopa});

        },

        /* Passem el tamany de la sopa */
        setTamanySopa: function (context, payload){
            context.commit('setTamanySopa', {sopa: payload.tamanySopa});

        },


        setFila: function(context, payload){
            context.commit('setFila', {sopa: payload.fila});
        },


        setColumna: function(context, payload){
            context.commit('setColumna', {sopa: payload.columna});
        },

    },



});