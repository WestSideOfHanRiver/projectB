# projectb
프로젝트B팀 화이팅~~~~~!
### 프로젝트B팀 화이팅~~~~~!


### django 셋팅 전에 가상환경 설정 필요, 
1. (가상환경 없을때만)python -m venv myvenv
2. source myvenv/Scripts/activate 

## 항상 가상환경 키고 시작
source myvenv/Scripts/activate 
## 가상환경 끌때
deactivate
## 기본셋팅
$ pip install django
$ django-admin startproject projectb
$ $ cd projectb/
$ python manage.py startapp main
setting.py 에 apps 에 'main' 추가
allowed host 에 * 추가
<<<<<<< HEAD

## 시간지역셋팅
settings.py - LANGUAGE_CODE - ko_kr
settings.py - TIME_ZONE = 'Asia/Seoul'

## model변동에, 데이터베이스 연동에 해야하는것들
& python manage.py makemigrations
$ python manage.py migrate

 React로 데이터 전달을 위한 DRF(Django REST Framework) API 설치
$ pip install django-rest-framework
$ pip install django-cors-headers

## react 연동
=======
언어 시간 변경

$ python manage.py migrate

>>>>>>> d83cb73cba36b952ff13d9c07f73450f69a77976
