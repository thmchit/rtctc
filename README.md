# 리;듬칫듬칫

## description
2명이 함께 즐기는 협동형 리듬게임!\
정사각형 디스플레이 사용, 오락실용 리듬게임

Copyright 2023. thmchit All rights reserved.

## authors
김준이, 김정환, 김래환

---
## specific features
### 메인 화면
게임의 로고가 각 사람에게 보임

### 레벨 선택 화면
해당 레벨의 원형의 앨범 커버가 돌아감\
버튼으로 다음 곡 고를 수 있음

### 게임 화면
노트가 6개의 레인을 따라 이동함\
노트는 양 방향 이동 가능

노트의 종류는 
* 일반 노트
* 롱 노트

가 있음

레인 중간에

* 포탈(노트 다른 레인으로 이동)
* 거울(노트 반대 방향으로 반사)

이 생기거나 사라지기도 함

화면 양쪽에\
정확도
* perfect
* miss

그리고 콤보가 표시됨

## dev rules
(아직 정해진건 아님, 김준이가 임의로 정함)
1. 4 space indent
2. for문 제외하고는 세미콜론 생략
3. require 대신 import 사용
4. 나머지는 모두 standard js style 따름\
https://standardjs.com/rules-kokr.html

## implementation ideas
### 로그인
* 고민중

### 맵 (레벨)
* 한 박을 bpm / n으로 설정
* 각 레인, 방향 (총 12개) 별 문자열을 만들어\
한 박 당 노트 1개가 매치되도록 한다.
    * 노트 없음: \*
    * 일반 노트: s
    * 롱 노트: l

    ex) '\*\*\*\*s\*\*\*s\*\*\*llll'

---
## special thanks to
IDEV, KSA. Korea Science Academy of KAIST