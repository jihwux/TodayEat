# 오늘뭐먹지? 

3가지 게임 ( 가위바위보 , 승부차기 , 돌림판 ) 을 통해서 점심 메뉴를 골라서 기록할 수 있는 서비스. 

## 기술

* Node Express
* EJS
* SCSS
* Mysql Sequelize
* AWS
* AJAX ( 가입/로그인 비동기 작업중 )

## 배포를 위한 AWS 세팅

 - aws에서 비트나미 끄기 
 - npm i
 - sudo npm i -g pm2 cross-env sequelize-cli
 - sequelize db:create --env production
 - sudo npm start



## DEV 

- pm i -g pm2 cross-env sequelize-cli
- sequelize db:create
- bcrypt 에러 npm i windows-build-tools (powershell 에서 관리자 권한)

