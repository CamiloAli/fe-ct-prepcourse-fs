function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

var fechavalida = new Date();

var añovalido = fechavalida.getFullYear()
var mesvalido = fechavalida.getMonth()
var diavalido = fechavalida.getDay()

var fechacorrecta = añovalido + "-" + mesvalido + "-" + diavalido;

  if (fecha === fechavalida) {
    return true;
  }
}

module.exports = esFechaValida;