function updateClock() {
  var aadiv = document.getElementById('div19');
  var test = aadiv.getElementsByTagName('img');

  function times() {
    for (var i = 0; i < test.length; i++) {
      if (i % 2 == 0)
        test[i].src = './images/命運石之門時鐘圖/11.gif';
      else
        test[i].src = './images/命運石之門時鐘圖/12.gif';
    }
  }

  function time() {
    var date = new Date();
    var str = fun(date.getHours()) + "p" + fun(date.getMinutes()) + "p" + fun(date.getSeconds());
    for (var i = 0; i < test.length; i++) {
      test[i].src = './images/命運石之門時鐘圖/' + str[i] + '.png';
    }
  }

  function fun(string) {
    if (string <= 9) {
      return "0" + string;
    } else {
      return "" + string;
    }
  }

  times();
  setTimeout(function () {
    setInterval(time, 1000);
    time();
  }, 1000);
}

window.onload = function () {
  updateClock();
};
