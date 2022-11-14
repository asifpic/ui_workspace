// 개봉 시기 달력 오늘까지
var now_utc = Date.now()
var timeOff = new Date().getTimezoneOffset()*60000;
var today = new Date(now_utc-timeOff).toISOString().split("T")[0];
document.getElementById("Date").setAttribute("max", today);


// 모달 창
$('.js-click-modal').click(function(){
    $('.container').addClass('modal-open');
  });
  
  $('.js-close-modal').click(function(){
    $('.container').removeClass('modal-open');
  });

 //슬라이드바
  var slider = document.getElementById("myRange");
  var output = document.getElementById("value");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
      output.innerHTML = this.value;
  }
