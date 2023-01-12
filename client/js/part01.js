


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

const navigation = getNode('.navigation');
const visualImage = getNode('.visual img');

// const list = getNode('.navigation > li');

// 네비게이션을 켠다
// 핸들러를 연결한다
// 이벤트 객체에서 타겟을 찾는다

// console.log(navigation);
function makeArray(arrayLike) {
  return Array.from(arrayLike)
}
// 선택한 li에게 is-active 클래스 넣기
// 선택하지 않은 li에게 is-active 클래스 제거
// 즉, 모든 li의 is-active를 다 제거한 후 선택한 li에만 is-active 추가
// 선택한 대상의 index 값 가져오기

// index 값을 가져와서 img주소의 숫자 변경하기
// 1. 비주얼 안에 있는 이미지를 가져온다
// 2. 이미지의 src 속성에 접근한다
// 3. src의 값을 index로 바꾼다
// 4. alt 변경
function handler(e) {
  let target = e.target.closest('li');
  if(!target) return;

  let list = makeArray(navigation.children);
  let index = attr(target,'data-index');
  
  // Array.from(list);
  // let arr = [...list];
  // Array.prototype.slice.call(list)
  
  // [li,li,li,li]
  list.forEach(item => removeClass(item,'is-active'))
  
  attr(visualImage,'src',`./assets/part01/${data[index-1].src}`)
  attr(visualImage,'alt',data[index-1].alt);
  // console.log(index);

  addClass(target,'is-active');  
}
navigation.addEventListener('click',handler);















