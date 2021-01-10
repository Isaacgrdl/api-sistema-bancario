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
      
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth();
      var dd = today.getDate();
      var lastWeek = [];

      for (var i = 0; i < 7; i++) {
        var otherDay = new Date(yyyy, mm, dd - i);
        lastWeek[i] = dateToString(otherDay);
      }
      return lastWeek;
}

exports.lastMonth = () => {
    function dateToString(d) {
        return [d.getFullYear(), d.getMonth() + 1, d.getDate()].map(d => d > 9 ? d : '0' + d).join('-');
      }
      
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth();
      var dd = today.getDate();
      var lastMonth = [];

      for (var i = 0; i < 30; i++) {
        var otherDay = new Date(yyyy, mm, dd - i);
        lastMonth[i] = dateToString(otherDay);
      }
      return lastMonth;
}