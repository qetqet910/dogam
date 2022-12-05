# 계기

스칼렛 깨다가 3연패 박고 빡종해서 기획
+ 결국 엔딩 봄

<br><br>

# 중간 점검

![poke](https://user-images.githubusercontent.com/79036088/204236067-5051b092-3c0c-45f6-9161-56b752a8865a.png)
<br><br>
양키형들 API라 한글을 잘 안 주길래 꽤나 힘들었음 킹치만 아직 기능이 좀 남음

# 기능 구현

- 미구현 
  - 무한 스크롤
  - 검색
  - 태그별 정렬
  - 포켓몬 상세 정보 페이지

- 구현
  - API 한국어 번역 완료
  - 메인 디자인 완료
  - ( ~ 280 ~ 1920 ~ ) 반응형 디자인
  - API 개편
  - 404 Page

- 구현 예정
  - Lottie 추가
  - 자원관리, 리팩토링

------------------

상세 정보에 들어갈 정보들

- 이름, 사진, 타입, 버전 별 도감 설명, 분류, 특성 - 숨특, 키, 몸무게,
- 이름, 사진, 타입 - 전 페이지에서 넘겨주기
- 버전 별 도감 설명 - pokemon-species 에서 flavor_text_entries.flavor_text 영어면 번역 API 
- 특성 - pokemon-species - abilities[] - ability.name, .is_hidden 
- 분류 - pokemon - hate[] - language.name에 ko 없으면 en 번역
- 키, 몸무게 - pokemon - height, weight 무게는 헥토그램 키는 데시미터이다
- 1 데시미터 = 0.1미터 1 핵토그램 = 0.1키로그램

- ETC
- https://pokeapi.co/api/v2/evolution-chain - 진화 레벨, 트리거
  - 이브이는 트리거가 없길래 그냥 버리기 / 레벨만 뽑아 쓰기 고려중
- https://pokeapi.co/api/v2/growth-rate - 성장속도, 필요 경험치
  - 한국어 없음, 경험치 총합도 아님, 성장 속도의 기준을 못 찾음 컷
- https://pokeapi.co/api/v2/move - 얘네 피셜 기술들이라는데 구조가 걍 개때리고싶음 컷
- https://pokeapi.co/api/v2/pokemon-form - 이름, 사진, 타입 모여있음
  - 대신에 이름이 영어임 패스
- 