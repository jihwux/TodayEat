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
        if (event.target.id === "myModal") {          
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
        if (event.target.id === "myModal") {          
          $("#join-wrap").fadeOut();
          $("#join-content").animate({
            top : "0"
          });
        }
      });

            
   
   
});

