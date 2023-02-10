# 오늘뭐먹지? 

3가지 게임 ( 가위바위보 , 승부차기 , 돌림판 ) 을 통해서 점심 메뉴를 골라서 기록할 수 있는 서비스.


## Tech

* Express
* EJS
* SCSS
* Sequelize

## 배포를 위한 AWS Set (~~현재는 Heroku에 배포~~)
### Heroku 프리티어 종료로 인해 koyeb에 DB제외 배포 (도메인 업로드 예정)

 
 - bitnami off in aws
 - npm i
 - sudo npm i -g pm2 cross-env sequelize-cli
 - sequelize db:create --env production
 - sudo npm start
 



## DEV 
- sequelize-cli 
- sequelize db:create
- bcrypt Error = npm i windows-build-tools
- Client does not support authentication protocol requested by server((MySQL v8 이하) Sql
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

