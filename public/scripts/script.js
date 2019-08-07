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
});

      // papergame
const arr = ['rock', 'paper', 'scissors'];
let food = ['김치찌개', '된장찌개', '불고기', '뼈해장국', '짬뽕', '짜장면'];
let foodSave = [];
  
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
     foodrand();     
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

function foodrand() {
  rand = food[Math.floor(Math.random() * 6)];
  alert(`오늘의 점심은 ${rand} 입니다!`);
  foodSave.push(rand);

  $.ajax({
    url:"",
    type: "GET",
    data: 'JSON',
    success: function(s) {

    },
    
  })
};

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
  percent : 0.7
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
          foodrand()
        }else if(korea.score < japen.score){
            screen("일본팀이 승리했습니다.")
          foodrand()

        }else{
          screen("비겼습니다.");
          foodrand()

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
 

// $(function(){
//   disabledJpButton(true)
//   disabledKrButton(true)
//         screen(3);
//         window.setTimeout(function(){
//             screen(2);
//           window.setTimeout(function(){
//                   screen(1);
//                   window.setTimeout(function(){
//                      screen('한국팀 부터 시작합니다. !');
//                      disabledKrButton(false)
//             }, 1000);
//           }, 1000);
//         }, 1000);
//     });


// Create new wheel object specifying the parameters at creation time.
let theWheel = new Winwheel({
  'numSegments'  : 12,     // Specify number of segments.
  'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
  'textFontSize' : 20,    // Set font size as desired.
  'segments'     :        // Define segments including colour and text.
  [
     {'fillStyle' : '#3f297e', 'text' : '된장찌개'},
     {'fillStyle' : '#1d61ac', 'text' : '불고기'},
     {'fillStyle' : '#169ed8', 'text' : '김치볶음밥'},
     {'fillStyle' : '#209b6c', 'text' : '짬뽕'},
     {'fillStyle' : '#60b236', 'text' : '순대국'},
     {'fillStyle' : '#efe61f', 'text' : '생선구이'},
     {'fillStyle' : '#f7a416', 'text' : '스파게티'},
     {'fillStyle' : '#e6471d', 'text' : '비빔밥'},
     {'fillStyle' : '#e5177b', 'text' : '어제먹은거'},
     {'fillStyle' : '#be107f', 'text' : '돈카츠'},
     {'fillStyle' : '#881f7e', 'text' : '라면'},
     {'fillStyle' : '#dc0936', 'text' : '냉면'}
  ],
  'animation' :           // Specify the animation to use.
  {
      'type'     : 'spinToStop',
      'duration' : 15,
      'spins'    : 9,
      'callbackFinished' : alertPrize,
      // 'callbackSound'    : playSound,   // Function to call when the tick sound is to be triggered.
      'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound, the other option is 'segment'.
  },
  'pins' :
  {
      'number' : 16   // Number of pins. They space evenly around the wheel.
  }
});

// -----------------------------------------------------------------
// This function is called when the segment under the prize pointer changes
// we can play a small tick sound here like you would expect on real prizewheels.
// -----------------------------------------------------------------
// let audio = new Audio('tick.mp3');  // Create audio object and load tick.mp3 file.

// function playSound()
// {
//   // Stop and rewind the sound if it already happens to be playing.
//   // audio.pause();
//   audio.currentTime = 0;

//   // Play the sound.
//   // audio.play();
// }

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------
function alertPrize(indicatedSegment)
{
  // Do basic alert of the segment text.
  // You would probably want to do something more interesting with this information.
  alert("오늘의 점심은 " + indicatedSegment.text + "입니다!");
  foodSave.push(indicatedSegment.text)
}

// =======================================================================================================================
// Code below for the power controls etc which is entirely optional. You can spin the wheel simply by
// calling theWheel.startAnimation();
// =======================================================================================================================
let wheelPower    = 0;
let wheelSpinning = false;

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel)
{
  // Ensure that power can't be changed while wheel is spinning.
  if (wheelSpinning == false) {
      // Reset all to grey incase this is not the first time the user has selected the power.
      document.getElementById('pw1').className = "";
      document.getElementById('pw2').className = "";
      document.getElementById('pw3').className = "";

      // Now light up all cells below-and-including the one selected by changing the class.
      if (powerLevel >= 1) {
          document.getElementById('pw1').className = "pw1";
      }

      if (powerLevel >= 2) {
          document.getElementById('pw2').className = "pw2";
      }

      if (powerLevel >= 3) {
          document.getElementById('pw3').className = "pw3";
      }

      // Set wheelPower var used when spin button is clicked.
      wheelPower = powerLevel;

      // Light up the spin button by changing it's source image and adding a clickable class to it.
      document.getElementById('spin_button').src = "./img/spin_on.png";
      document.getElementById('spin_button').className = "clickable";
  }
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin()
{
  // Ensure that spinning can't be clicked again while already running.
  if (wheelSpinning == false) {
      // Based on the power level selected adjust the number of spins for the wheel, the more times is has
      // to rotate with the duration of the animation the quicker the wheel spins.
      if (wheelPower == 1) {
          theWheel.animation.spins = 3;
      } else if (wheelPower == 2) {
          theWheel.animation.spins = 8;
      } else if (wheelPower == 3) {
          theWheel.animation.spins = 15;
      }

      // Disable the spin button so can't click again while wheel is spinning.
      document.getElementById('spin_button').src       = "../img/spin_off.png";
      document.getElementById('spin_button').className = "";

      // Begin the spin animation by calling startAnimation on the wheel object.
      theWheel.startAnimation();

      // Set to true so that power can't be changed and spin button re-enabled during
      // the current animation. The user will have to reset before spinning again.
      wheelSpinning = true;
  }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel()
{
  theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
  theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
  theWheel.draw();                // Call draw to render changes to the wheel.

  document.getElementById('pw1').className = "";  // Remove all colours from the power level indicators.
  document.getElementById('pw2').className = "";
  document.getElementById('pw3').className = "";

  wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}
   
// var testArr = ['a','b'];

$('body').click(function() {
$.ajax({
  url:"/ajax",
  dataType: 'JSON',
  type: "POST",
  success: function(s) {
    // alert('a')
    console.log('aa')
  },
  error: function(e){
    // alert('error');
    console.log('error')
  }
});
})