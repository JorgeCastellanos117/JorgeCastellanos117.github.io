   function calcularPuntaje() {
      var puntaje = 0;

      // Pregunta 1
      var respuesta1 = document.querySelector('input[name="pregunta1"]:checked');
      if (respuesta1 && respuesta1.value === "opcion1") {
        puntaje++;
      }
      // Pregunta 2
      var respuesta2 = document.querySelector('input[name="pregunta2"]:checked');
      if (respuesta2 && respuesta2.value === "opcion1") {
        puntaje++;
      }

      // Pregunta 3
      var respuesta3 = document.getElementById("pregunta3").value;
      if (respuesta3 === "4") {
        puntaje++;
      }

      // Pregunta 4
      var respuesta4 = document.getElementById("pregunta4").value;
      if (respuesta4 === "x^2 + x - 6") {
        puntaje++;
      }

      // Pregunta 5
      var respuesta5 = document.getElementById("pregunta5").value;
      if (respuesta5 === "y = 2x + 1") {
        puntaje++;
      }

      alert("Tu puntaje es: " + puntaje + "/5");
    }