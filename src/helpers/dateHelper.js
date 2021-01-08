'use stricts'

exports.today = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2,'0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today;
}

exports.lastWeek = () => {
    function dateToString(d) {
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('-');
      }
      
      var hoje = new Date();
      var ano = hoje.getFullYear();
      var mes = hoje.getMonth();
      var dia = hoje.getDate();
      var lastWeek = [];

      for (var i = 0; i < 7; i++) {
        var outroDia = new Date(ano, mes, dia - i);
        lastWeek[i] = dateToString(outroDia);
      }
      return lastWeek;
}

exports.lastMonth = () => {
    function dateToString(d) {
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('-');
      }
      
      var hoje = new Date();
      var ano = hoje.getFullYear();
      var mes = hoje.getMonth();
      var dia = hoje.getDate();
      var lastMonth = [];

      for (var i = 0; i < 30; i++) {
        var outroDia = new Date(ano, mes, dia - i);
        lastMonth[i] = dateToString(outroDia);
      }
      return lastMonth;
}