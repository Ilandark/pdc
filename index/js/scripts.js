/* Scripts Generales */


/* Fecha */
function fecha() {
    fecha = new Date()
    mes = fecha.getMonth()
    diaMes = fecha.getDate()
    diaSemana = fecha.getDay()
    anio = fecha.getFullYear()
    dias = new Array('Domingo', 'Lunes', 'Martes', 'Mi&eacute;rcoles', 'Jueves', 'Viernes', 'S&aacute;bado')
    meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre')
    document.write('<span id="fecha">')
    document.write(dias[diaSemana] + ", " + diaMes + " de " + meses[mes] + " de " + anio)
    document.write('</span>')
}