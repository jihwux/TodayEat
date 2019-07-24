$(function(){
  
  var $nextBtn = $('.next-btn');
  var $prevBtn = $('.prev-btn');
  var $topBtn =  $('.top-btn');
  var $botBtn =  $('.bot-btn');
  var $prevBtnBot = $('.prev-bot');
  var $prevBtnTop = $('.prev-top');

  var visual = $('article .si-z');
  var current = 0;     // 0이니까 섹션이 들어감. 커런트에
  var next = 1;

  $nextBtn.on('click',function(){
      var currentEI = visual.eq(current);  // 커런트는 섹션임 제일 첫번쨰
      var nextEI = visual.eq(next);           //1은 eq가 순서니까 다음꺼 섹션다음인 비쥬얼 1이 되겠네
      currentEI.css({left:0}).stop().animate({left:'-100%'})             //섹션이뒤로 이동하게됨 그리고 그자리에는 아무도 없음. 다음엘리먼트가 레프트가 0이되야한다.
      nextEI.css({left:'100%'}).stop().animate({left:0})           // 다음 엘리먼트 레프트 100%해주는 이유는 200%인 엘리먼트도 있으니 100%으로 해줘야함. 그리고 애니메이트 래프트 0으로 해줘서
      next += 1
      console.log(next)
    });
  $prevBtn.on('click',function(){
    next -= 1
    var currentEI = visual.eq(current);
    var prevEI = visual.eq(next);
    currentEI.css({left:'100%'}).stop().animate({left:0});
    prevEI.css({left:0}).stop().animate({left:'100%'});
    console.log(next)
  });

  $topBtn.on('click',function(){
    next += 1
    var currentEI = visual.eq(current);
    var nextEI = visual.eq(next);
    currentEI.css({left:0}).stop().animate({left:'-100%'})             //섹션이뒤로 이동하게됨 그리고 그자리에는 아무도 없음. 다음엘리먼트가 레프트가 0이되야한다.
    nextEI.css({
      left:'100%',
      top:'-100%'
    }).stop().animate({
      left:0,
      top:0
    })
    $('.prev-btn').css('display','none');
    $('.prev-top').css('display','block');
    console.log(next)
  })
  $botBtn.on('click',function(){
    next += 2
    var currentEI = visual.eq(current);
    var nextEI = visual.eq(next);
    currentEI.css({left:0}).stop().animate({left:'-100%'})             //섹션이뒤로 이동하게됨 그리고 그자리에는 아무도 없음. 다음엘리먼트가 레프트가 0이되야한다.
    nextEI.css({
      left:'100%',
      bottom:'-100%'
    }).stop().animate({
      left:0,
      bottom:0
    })
    $('.prev-btn').css('display','none');
    $('.prev-bot').css('display','block')
    console.log(next);
  })
  $prevBtnTop.on('click',function(){
    current += 3
    var currentEI = visual.eq(current);
    currentEI.css({
      left:0,
      top:0
    }).stop().animate({
      left:'100%',
      top:'100%'
    })
    next = 2;
    current = 0
    $('.prev-btn').css('display','block');
  })
  $prevBtnBot.on('click',function(){
  $('.prev-btn').css('display','block');
    current += 4
    var currentEI = visual.eq(current);
    currentEI.css({
      left:0,
    bottom:0
  }).stop().animate({
    left:'100%',
    bottom:'100%'
  })
  next = 2;
  current = 0
  })

   
      $("#login").click(function() {
        $("#login-wrap").fadeIn();
        $("#login-content").animate({
          top: "30%"
        })
      });
   
      $(".close").click(function() {
        $("#login-wrap").fadeOut();
        $("#login-content").animate({
          top : "0"
        });
      });
      
      $("html").click(function(event) {
        if (event.target.id === "login-wrap") {          
          $("#login-wrap").fadeOut();
          $("#login-content").animate({
            top : "0"
          });
        }
      });

      $("#join").click(function() {
        $("#join-wrap").fadeIn();
        $("#join-content").animate({
          top: "30%"
        })
      });
   
      $(".close").click(function() {
        $("#join-wrap").fadeOut();
        $("#join-content").animate({
          top : "0"
        });
      });
      
      $("html").click(function(event) {
        if (event.target.id === "join-wrap") {          
          $("#join-wrap").fadeOut();
          $("#join-content").animate({
            top : "0"
          });
        }
      });



      // papergame

   
});

const arr = ['rock', 'paper', 'scissors'];

// const arr = new Array();
//  constarr[0].src = '../img/paper_1.png'; 
//  arr[1].src = '../img/paper_2.png'; 
//  arr[2].src = '../img/paper_3.png'; 
  

let rand = "";
let wins = 0;
let losses = 0;
let ties = 0;

function chooseWeapon(weapon) {
  rand = arr[Math.floor(Math.random() * 3)];
  let choice = document.getElementById("choice");
  choice.innerHTML = `<img src="../img/${weapon}.png"><img src="../img/${rand}.png">`;
  chooseFate(weapon, rand);
}

function chooseFate(weapon, rand)  {
  if(weapon === 'rock' && rand === 'scissors' ||
     weapon === 'paper' && rand === 'rock' ||
     weapon === 'scissors' && rand === 'paper') {
      let fate = document.getElementById("fate");
      fate.innerHTML = '이겼습니다.';
     tallyUp('win');
  }   
  else if(weapon === 'rock' && rand === 'paper' || 
          weapon === 'paper' && rand === 'scissors' ||
          weapon === 'scissors' && rand === 'rock') {
            let fate = document.getElementById("fate");
            fate.innerHTML = '졌습니다.';
    tallyUp('lose'); 
  }   
  else {
    let fate = document.getElementById("fate");
    fate.innerHTML = '비겼습니다.'; 
    tallyUp('tie');
  }   
}

function tallyUp(score) {
  if(score === 'win') {
    let setWins = document.getElementById("wins");
    setWins.innerHTML = wins += 1;
  }
  else if(score === 'lose') {
    let setLosses = document.getElementById("losses");
    setLosses.innerHTML = losses += 1;
  }
  else {
    let setTies = document.getElementById("ties");
    setTies.innerHTML = ties += 1;
  }
}
// soccergame

var korea = {
  score : 0,
  percent : 0.75
};
var japen = {
  score : 0,
  percent : 0.7
};
var soccerGame = {
  jpScoreNumber: 5,
   krScoreNumber: 5
}
 
var krTeam = ["손흥민","조현우","황희찬","이승우","박지성"];
 
function onKoreaShoot(){
  if (Math.random() < korea.percent) {
      screen("한국팀 : " + krTeam[0]  + "선수가 슛에 성공했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
      updateKorScore();
  }else{
      screen("한국팀 : " +  krTeam[0]  + " 선수가 슛에 실패했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
  }
 
var $krScoreNumberElem = $('#kr-number')
 
  soccerGame.krScoreNumber --;
  $krScoreNumberElem.html(soccerGame.krScoreNumber);
 
  disabledKrButton(true);
  disabledJpButton(false);
}
function onJapenShoot(){
  krTeam.shift();
 
  if (Math.random() < japen.percent ) {
      screen("일본팀이 슛에 성공했습니다.");// 스크린 인자값에 들어갈 상황 텍스트
      updateJpScore();
  } else {
      screen("일본팀이 슛에 실패했습니다.");// 스크린 인자값에 들어갈 상황 텍스트
  }
  var $jpScoreNumberElem = $('#jp-number');
    soccerGame.jpScoreNumber --;
    $jpScoreNumberElem.html(soccerGame.jpScoreNumber) ;
    disabledKrButton(false);
    disabledJpButton(true);
 
    if(soccerGame.jpScoreNumber === 0){
        if(korea.score > japen.score){
          screen("한국팀이 승리했습니다.");
        }else if(korea.score < japen.score){
            screen("일본팀이 승리했습니다.")
        }else{
          screen("비겼습니다.");
        }
        disabledKrButton(true);
        disabledJpButton(true);
    }
}
 
 
function screen(s){
   var $textElem = $('#score-text');
   $textElem.html(s);
}
function updateKorScore(){
  var $korElem = $('#kr-score');
 
  korea.score += 1;  // 슛이 성공하면 한국 스코어 1 증가 .
  $korElem.html(korea.score);
 
}
function updateJpScore(){
  var $jpElem = $('#jp-score');
 
  japen.score += 1;  // 슛이 성공하면 한국 스코어 1 증가 .
  $jpElem.html(japen.score);
}
function disabledKrButton(flag){
   $('.btn-korea').prop('disabled', flag);
}
function disabledJpButton(flag){
   $('.btn-japen').prop('disabled', flag);
}
 
$(function(){
  disabledJpButton(true)
  disabledKrButton(true)
        screen(3);
        window.setTimeout(function(){
            screen(2);
          window.setTimeout(function(){
                  screen(1);
                  window.setTimeout(function(){
                     screen('한국팀 부터 시작합니다. !');
                     disabledKrButton(false)
            }, 1000);
          }, 1000);
        }, 1000);
    });

    (function($) {
      $.fn.extend({
    
        roulette: function(options) {
    
          var defaults = {
            angle: 0,
            angleOffset: -45,
            speed: 5000,
            easing: "easeInOutElastic",
          };
    
          var opt = $.extend(defaults, options);
    
          return this.each(function() {
            var o = opt;
    
            var data = [
              {
                color: '#3f297e',
                text: 'N분의 1'
              },
              {
                color: '#1d61ac',
                text: '요즘것들'
              },
              {
                color: '#169ed8',
                text: '도박'
              },
              {
                color: '#209b6c',
                text: '젓가락'
              },
              {
                color: '#60b236',
                text: '거북선'
              },
              {
                color: '#efe61f',
                text: '겁'
              },
              {
                color: '#f7a416',
                text: 'Day Day'
              },
              {
                color: '#e6471d',
                text: '호랑나비'
              },
              {
                color: '#dc0936',
                text: 'Okey Dokey'
              },
              {
                color: '#e5177b',
                text: '오빠차'
              },
              {
                color: '#be107f',
                text: 'RESPECT'
              },
              {
                color: '#881f7e',
                text: '작두'
              }
            ];
    
            var $wrap = $(this);
            var $btnStart = $wrap.find("#btn-start");
            var $roulette = $wrap.find(".roulette");
            var wrapW = $wrap.width();
            var angle = o.angle;
            var angleOffset = o.angleOffset;
            var speed = o.speed;
            var esing = o.easing;
            var itemSize = data.length;
            var itemSelector = "item";
            var labelSelector = "label";
            var d = 360 / itemSize;
            var borderTopWidth = wrapW;
            var borderRightWidth = tanDeg(d);
    
            for (i = 1; i <= itemSize; i += 1) {
              var idx = i - 1;
              var rt = i * d + angleOffset;
              var itemHTML = $('<div class="' + itemSelector + '">');
              var labelHTML = '';
                  labelHTML += '<p class="' + labelSelector + '">';
                  labelHTML += '	<span class="text">' + data[idx].text + '<\/span>';
                  labelHTML += '<\/p>';
    
              $roulette.append(itemHTML);
              $roulette.children("." + itemSelector).eq(idx).append(labelHTML);
              $roulette.children("." + itemSelector).eq(idx).css({
                "left": wrapW / 2,
                "top": -wrapW / 2,
                "border-top-width": borderTopWidth,
                "border-right-width": borderRightWidth,
                "border-top-color": data[idx].color,
                "transform": "rotate(" + rt + "deg)"
              });
    
              var textH = parseInt(((2 * Math.PI * wrapW) / d) * .5);
    
              $roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
                "height": textH + 'px',
                "line-height": textH + 'px',
                "transform": 'translateX(' + (textH * 1.3) + 'px) translateY(' + (wrapW * -.3) + 'px) rotateZ(' + (90 + d * .5) + 'deg)'
              });
    
            }
    
            function tanDeg(deg) {
              var rad = deg * Math.PI / 180;
              return wrapW / (1 / Math.tan(rad));
            }
    
    
            $btnStart.on("click", function() {
              rotation();
            });
    
            function rotation() {
    
              var completeA = 360 * r(5, 10) + r(0, 360);
    
              $roulette.rotate({
                angle: angle,
                animateTo: completeA,
                center: ["50%", "50%"],
                easing: $.easing.esing,
                callback: function() {
                  var currentA = $(this).getRotateAngle();
    
                  console.log(currentA);
    
                },
                duration: speed
              });
            }
    
            function r(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
            }
    
          });
        }
      });
    })(jQuery);
    
    $(function() {
    
      $('.box-roulette').roulette();
    
    });