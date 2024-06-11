// 更新倒數計時的函數
function updateCountdown(endTime) {
    const now = new Date().getTime();
    const distance = endTime - now;
  
    // 如果倒數計時結束
    if (distance < 0) {
      clearInterval(countdownInterval);
      return;
    }
  
    // 計算剩餘的天數、小時、分鐘和秒數
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // 將計算結果轉換為字符串，並在必要時填充零
    const daysString = String(days).padStart(3, '0');
    const hoursString = String(hours).padStart(2, '0');
    const minutesString = String(minutes).padStart(2, '0');
    const secondsString = String(seconds).padStart(2, '0');
  
    // 更新倒數計時的圖片
    document.getElementById('countdown-days-1').src = `./images/命運石之門時鐘圖/${daysString[0]}.png`;
    document.getElementById('countdown-days-2').src = `./images/命運石之門時鐘圖/${daysString[1]}.png`;
    document.getElementById('countdown-days-3').src = `./images/命運石之門時鐘圖/${daysString[2]}.png`;
    document.getElementById('countdown-hours-1').src = `./images/命運石之門時鐘圖/${hoursString[0]}.png`;
    document.getElementById('countdown-hours-2').src = `./images/命運石之門時鐘圖/${hoursString[1]}.png`;
    document.getElementById('countdown-minutes-1').src = `./images/命運石之門時鐘圖/${minutesString[0]}.png`;
    document.getElementById('countdown-minutes-2').src = `./images/命運石之門時鐘圖/${minutesString[1]}.png`;
    document.getElementById('countdown-seconds-1').src = `./images/命運石之門時鐘圖/${secondsString[0]}.png`;
    document.getElementById('countdown-seconds-2').src = `./images/命運石之門時鐘圖/${secondsString[1]}.png`;
  }
  
  // 初始化倒數計時的函數
  function initializeCountdown() {
    const countdownElements = [
      'countdown-days-1', 'countdown-days-2', 'countdown-days-3',
      'countdown-hours-1', 'countdown-hours-2',
      'countdown-minutes-1', 'countdown-minutes-2',
      'countdown-seconds-1', 'countdown-seconds-2'
    ];
  
    countdownElements.forEach((id, index) => {
      const element = document.getElementById(id);
      element.src = (index % 2 === 0) ? './images/命運石之門時鐘圖/11.gif' : './images/命運石之門時鐘圖/12.gif';
    });
  }
  
  // 設置倒數計時的結束時間
  const endTime = new Date('2024-09-18T12:00:00').getTime();
  
  // 更新時鐘的函數
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
  
  // 確保在頁面加載後執行
  window.onload = function () {
    // 初始化時鐘
    updateClock();
    
    // 初始化倒數計時
    initializeCountdown();
    setTimeout(function () {
      setInterval(() => {
        updateCountdown(endTime);
      }, 1000);
      updateCountdown(endTime); // 初始化調用一次，以確保頁面加載時顯示正確的倒數計時
    }, 1000);
  };
  