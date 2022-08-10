# projectb
프로젝트B팀 화이팅~~~~~!
### 프로젝트B팀 화이팅~~~~~!


### django 셋팅 전에 가상환경 설정 필요, 
1. (가상환경 없을때만)python -m venv myvenv
2. source myvenv/Script/activate 

## 기본셋팅
$ pip install django
$ django-admin startproject projectb
$ $ cd projectb/
$ python manage.py startapp main
setting.py 에 apps 에 'main' 추가
allowed host 에 * 추가
언어 시간 변경
$ python manage.py migrate