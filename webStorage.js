var emmagatzematge = {
    
    desar: function() {
        var p1 = document.getElementById("p1");
        var p2 = document.getElementById("p2");
        var p3 = document.getElementById("p3");
        localStorage.setItem("p1",p1.value);
        localStorage.setItem("p2",p2.value);
        localStorage.setItem("p3",p3.value);

        if(p1.value==null || p2.value==null || p3.value==null){
            localStorage.setItem("p1",dadesCompartides.paraules[0]);
            localStorage.setItem("p2",dadesCompartides.paraules[1]);
            localStorage.setItem("p3",dadesCompartides.paraules[2]);
          }
       // emmagatzematge.esborrarTaula();
       // emmagatzematge.mostrar();
    },
    mostrar: function() {
       /*  for (var i = 0; i < localStorage.length; i++) {
            var fila = taula.insertRow(0);
            fila.insertCell(0).innerHTML = localStorage.key(i);
            fila.insertCell(1).innerHTML = localStorage.getItem(localStorage.key(i));
        }; */
    },
    esborrarTaula: function() {
        /* while (taula.rows.length > 0) {
            taula.deleteRow(0);
        } */
    },
    esborrarItem: function() {
        /* localStorage.removeItem(document.getElementById('nom').value);
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar(); */
    },
    netejar: function() {
        /* localStorage.clear();
        emmagatzematge.esborrarTaula();
        emmagatzematge.mostrar(); */
    }
}
