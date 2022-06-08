$(function () {
  var $nextBtn = $(".next-btn");
  var $prevBtn = $(".prev-btn");
  var $topBtn = $(".top-btn");
  var $botBtn = $(".bot-btn");
  var $prevBtnBot = $(".prev-bot");
  var $prevBtnTop = $(".prev-top");

  var visual = $("article .si-z");
  var current = 0;
  var next = 1;
  $nextBtn.on("click", function () {
    var currentEI = visual.eq(current);
    var nextEI = visual.eq(next);
    currentEI
      .css({
        left: 0,
      })
      .stop()
      .animate({
        left: "-100%",
      });
    nextEI
      .css({
        left: "100%",
      })
      .stop()
      .animate({
        left: 0,
      });
    next += 1;
  });
  $prevBtn.on("click", function () {
    next -= 1;
    var currentEI = visual.eq(current);
    var prevEI = visual.eq(next);
    currentEI
      .css({
        left: "100%",
      })
      .stop()
      .animate({
        left: 0,
      });
    prevEI
      .css({
        left: 0,
      })
      .stop()
      .animate({
        left: "100%",
      });
  });

  $topBtn.on("click", function () {
    next += 1;
    var currentEI = visual.eq(current);
    var nextEI = visual.eq(next);
    currentEI
      .css({
        left: 0,
      })
      .stop()
      .animate({
        left: "-100%",
      });
    nextEI
      .css({
        left: "100%",
        top: "-100%",
      })
      .stop()
      .animate({
        left: 0,
        top: 0,
      });
    $(".prev-btn").css("display", "none");
    $(".prev-top").css("display", "block");
  });
  $botBtn.on("click", function () {
    next += 2;
    var currentEI = visual.eq(current);
    var nextEI = visual.eq(next);
    currentEI
      .css({
        left: 0,
      })
      .stop()
      .animate({
        left: "-100%",
      });
    nextEI
      .css({
        left: "100%",
        bottom: "-100%",
      })
      .stop()
      .animate({
        left: 0,
        bottom: 0,
      });
    $(".prev-btn").css("display", "none");
    $(".prev-bot").css("display", "block");
  });
  $prevBtnTop.on("click", function () {
    current += 3;
    var currentEI = visual.eq(current);
    currentEI
      .css({
        left: 0,
        top: 0,
      })
      .stop()
      .animate({
        left: "100%",
        top: "100%",
      });
    next = 2;
    current = 0;
    $(".prev-btn").css("display", "block");
  });
  $prevBtnBot.on("click", function () {
    $(".prev-btn").css("display", "block");
    current += 4;
    var currentEI = visual.eq(current);
    currentEI
      .css({
        left: 0,
        bottom: 0,
      })
      .stop()
      .animate({
        left: "100%",
        bottom: "100%",
      });
    next = 2;
    current = 0;
  });

  $("#login").click(function () {
    $("#login-wrap").fadeIn();
    $("#login-content").animate({
      top: "30%",
    });
  });

  $(".close").click(function () {
    $("#login-wrap").fadeOut();
    $("#login-content").animate({
      top: "0",
    });
  });

  $("html").click(function (event) {
    if (event.target.id === "login-wrap") {
      $("#login-wrap").fadeOut();
      $("#login-content").animate({
        top: "0",
      });
    }
  });

  var abc = 2;
  $("#join").click(function () {
    $("#join-wrap").fadeIn();
    $("#join-content").animate({
      top: "30%",
    });
  });

  $(".close").click(function () {
    $("#join-wrap").fadeOut();
    $("#join-content").animate({
      top: "0",
    });
  });

  $("html").click(function (event) {
    if (event.target.id === "join-wrap") {
      $("#join-wrap").fadeOut();
      $("#join-content").animate({
        top: "0",
      });
    }
  });
});

// Papergame
const arr = ["rock", "paper", "scissors"];

const food = [
  {
    text: "된장(김치)찌개",
    kcal: "465kcal",
  },
  {
    text: "백반정식",
    kcal: "500 ~ 770kcal",
  },
  {
    text: "국수",
    kcal: "400 ~ 700kcal",
  },
  {
    text: "짬뽕&짜장",
    kcal: "788 ~ 864kcal",
  },
  {
    text: "순대(돼지)국밥",
    kcal: "360 ~ 488kcal",
  },
  {
    text: "생선구이",
    kcal: "150 ~ 379kcal",
  },
  {
    text: "파스타&양식",
    kcal: "436 ~ 830kcal",
  },
  {
    text: "햄버거",
    kcal: "682 ~ 1437kcal",
  },
  {
    text: "어제 먹은 음식",
    kcal: "",
  },
  {
    text: "돈가스",
    kcal: "500 ~ 755kcal",
  },
  {
    text: "라면&김밥",
    kcal: "500 ~ 985kcal",
  },
  {
    text: "쌀국수",
    kcal: "320 ~ 467kcal",
  },
];
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

function chooseFate(weapon, rand) {
  if (
    (weapon === "rock" && rand === "scissors") ||
    (weapon === "paper" && rand === "rock") ||
    (weapon === "scissors" && rand === "paper")
  ) {
    let fate = document.getElementById("fate");
    fate.innerHTML = "이겼습니다.";
    tallyUp("win");
    setTimeout(function () {
      foodrand();
    }, 100);
  } else if (
    (weapon === "rock" && rand === "paper") ||
    (weapon === "paper" && rand === "scissors") ||
    (weapon === "scissors" && rand === "rock")
  ) {
    let fate = document.getElementById("fate");
    fate.innerHTML = "졌습니다.";
    tallyUp("lose");
  } else {
    let fate = document.getElementById("fate");
    fate.innerHTML = "비겼습니다.";
    tallyUp("tie");
  }
  $(".gbtn").attr("disabled", true);
  $(".rbtn").attr("disabled", false);
}
$(".rbtn").click(function () {
  $(".gbtn").attr("disabled", false);
  $(".rbtn").attr("disabled", true);
});

function foodrand() {
  rand = food[Math.floor(Math.random() * 12)];
  let foodName = rand.text;
  let foodKcal = rand.kcal;

  if (
    confirm(`  오늘의 점심은 ${foodName}입니다! \n메뉴를 저장 하시겠습니까?`) ==
    true
  ) {
    foodSave.push(rand);
    $.ajax({
      url: "/foodsave/foodsave",
      method: "POST",
      data: {
        food: foodName,
        foodKcal: foodKcal,
      },
      success: function (s) {
        alert("저장된 메뉴는 마이페이지에 확인하실 수 있습니다.");
      },
      error: function (error) {
        alert("저장하려면 로그인이 필요합니다.");
      },
    });
  } else {
    return;
  }
}

function tallyUp(score) {
  if (score === "win") {
    let setWins = document.getElementById("wins");
    setWins.innerHTML = wins += 1;
  } else if (score === "lose") {
    let setLosses = document.getElementById("losses");
    setLosses.innerHTML = losses += 1;
  } else {
    let setTies = document.getElementById("ties");
    setTies.innerHTML = ties += 1;
  }
}

// soccergame
var korea = {
  score: 0,
  percent: 0.7,
};
var japen = {
  score: 0,
  percent: 0.7,
};
var soccerGame = {
  jpScoreNumber: 5,
  krScoreNumber: 5,
};

var krTeam = ["국수", "김치찌개", "돈까스", "백반", "파스타"];

function onKoreaShoot() {
  if (Math.random() < korea.percent) {
    screen("고지방팀 : " + krTeam[0] + "선수가 슛에 성공했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
    updateKorScore();
  } else {
    screen("고지방팀 : " + krTeam[0] + " 선수가 슛에 실패했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
  }

  var $krScoreNumberElem = $("#kr-number");

  soccerGame.krScoreNumber--;
  $krScoreNumberElem.html(soccerGame.krScoreNumber);

  disabledKrButton(true);
  disabledJpButton(false);
  $(".btn-reset").attr("disabled", true);
}

function onJapenShoot() {
  krTeam.shift();
  if (Math.random() < japen.percent) {
    screen("저지방팀이 슛에 성공했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
    updateJpScore();
  } else {
    screen("저지방팀이 슛에 실패했습니다."); // 스크린 인자값에 들어갈 상황 텍스트
  }
  var $jpScoreNumberElem = $("#jp-number");
  soccerGame.jpScoreNumber--;
  $jpScoreNumberElem.html(soccerGame.jpScoreNumber);
  disabledKrButton(false);
  disabledJpButton(true);

  if (soccerGame.jpScoreNumber === 0) {
    if (korea.score > japen.score) {
      screen("고지방팀이 승리했습니다.");
      setTimeout(function () {
        foodrand();
      }, 100);
      // onReset();
      $(".btn-reset").attr("disabled", false);
    } else if (korea.score < japen.score) {
      screen("저지방팀이 승리했습니다.");
      $(".btn-reset").attr("disabled", false);
    } else {
      screen("비겼습니다.");
      $(".btn-reset").attr("disabled", false);
    }
    disabledKrButton(true);
    disabledJpButton(true);
  }
}

function screen(s) {
  var $textElem = $("#score-text");
  $textElem.html(s);
}

function updateKorScore() {
  var $korElem = $("#kr-score");

  korea.score += 1; // 슛이 성공하면 한국 스코어 1 증가 .
  $korElem.html(korea.score);
}

function updateJpScore() {
  var $jpElem = $("#jp-score");

  japen.score += 1; // 슛이 성공하면 한국 스코어 1 증가 .
  $jpElem.html(japen.score);
}

function disabledKrButton(flag) {
  $(".btn-korea").prop("disabled", flag);
}

function disabledJpButton(flag) {
  $(".btn-japen").prop("disabled", flag);
}

function onReset() {
  $(".btn-reset").attr("disabled", false);
  $(".btn-korea").attr("disabled", false);

  var $jpElem = $("#jp-score");
  var $korElem = $("#kr-score");
  var $krScoreNumberElem = $("#kr-number");
  var $jpScoreNumberElem = $("#jp-number");
  krTeam.push("국수", "김치찌개", "돈까스", "백반", "파스타");

  japen.score = 0;
  korea.score = 0;
  $jpElem.html(japen.score);
  $korElem.html(korea.score);
  soccerGame.krScoreNumber = 5;
  soccerGame.jpScoreNumber = 5;
  $jpScoreNumberElem.html(soccerGame.jpScoreNumber);
  $krScoreNumberElem.html(soccerGame.krScoreNumber);
}

// Wheel

let theWheel = new Winwheel({
  numSegments: 12,
  outerRadius: 212,
  textFontSize: 20,
  segments: [
    {
      fillStyle: "#3f297e",
      text: "된장(김치)찌개",
      kcal: "465kcal",
    },
    {
      fillStyle: "#1d61ac",
      text: "백반정식",
      kcal: "500 ~ 770kcal",
    },
    {
      fillStyle: "#169ed8",
      text: "국수",
      kcal: "400 ~ 700kcal",
    },
    {
      fillStyle: "#209b6c",
      text: "짬뽕&짜장",
      kcal: "788 ~ 864kcal",
    },
    {
      fillStyle: "#60b236",
      text: "순대(돼지)국밥",
      kcal: "360 ~ 488kcal",
    },
    {
      fillStyle: "#efe61f",
      text: "생선구이",
      kcal: "150 ~ 379kcal",
    },
    {
      fillStyle: "#f7a416",
      text: "파스타&양식",
      kcal: "436 ~ 830kcal",
    },
    {
      fillStyle: "#e6471d",
      text: "햄버거",
      kcal: "682 ~ 1437kcal",
    },
    {
      fillStyle: "#e5177b",
      text: "어제 먹은 음식",
      kcal: "",
    },
    {
      fillStyle: "#be107f",
      text: "돈가스",
      kcal: "500 ~ 755kcal",
    },
    {
      fillStyle: "#881f7e",
      text: "라면&김밥",
      kcal: "500 ~ 985kcal",
    },
    {
      fillStyle: "#dc0936",
      text: "쌀국수",
      kcal: "320 ~ 467kcal",
    },
  ],
  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 10,
    callbackFinished: alertPrize,
    soundTrigger: "pin",
  },
  pins: {
    number: 16,
  },
});

function alertPrize(indicatedSegment) {
  if (
    confirm(
      "오늘의 점심은 " +
        indicatedSegment.text +
        indicatedSegment.kcal +
        "입니다! \n" +
        "메뉴를 저장 하시겠습니까?"
    ) == true
  ) {
    foodSave.push(indicatedSegment.text);
    $.ajax({
      url: "/foodsave/foodsave",
      method: "POST",
      data: {
        food: indicatedSegment.text,
        foodKcal: indicatedSegment.kcal,
      },
      success: function (s) {
        alert("저장된 메뉴는 마이페이지에 확인하실 수 있습니다.");
      },
      error: function (error) {
        alert("저장하려면 로그인이 필요합니다.");
      },
    });
  } else {
    return;
  }
}

let wheelPower = 0;
let wheelSpinning = false;

function powerSelected(powerLevel) {
  if (wheelSpinning == false) {
    document.getElementById("pw1").className = "";
    document.getElementById("pw2").className = "";
    document.getElementById("pw3").className = "";

    if (powerLevel >= 1) {
      document.getElementById("pw1").className = "pw1";
    }

    if (powerLevel >= 2) {
      document.getElementById("pw2").className = "pw2";
    }

    if (powerLevel >= 3) {
      document.getElementById("pw3").className = "pw3";
    }

    wheelPower = powerLevel;

    document.getElementById("spin_button").src = "./img/spin_on.png";
    document.getElementById("spin_button").className = "clickable";
  }
}

function startSpin() {
  if (wheelSpinning == false) {
    if (wheelPower == 1) {
      theWheel.animation.spins = 3;
    } else if (wheelPower == 2) {
      theWheel.animation.spins = 8;
    } else if (wheelPower == 3) {
      theWheel.animation.spins = 15;
    }

    document.getElementById("spin_button").src = "../img/spin_off.png";
    document.getElementById("spin_button").className = "";

    theWheel.startAnimation();

    wheelSpinning = true;
  }
}

function resetWheel() {
  theWheel.stopAnimation(false);
  theWheel.rotationAngle = 0;
  theWheel.draw();

  document.getElementById("pw1").className = "";
  document.getElementById("pw2").className = "";
  document.getElementById("pw3").className = "";

  wheelSpinning = false;
}
