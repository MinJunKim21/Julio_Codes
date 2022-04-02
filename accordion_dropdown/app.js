const accordionItems = document.querySelectorAll('.accordion-item-inner');

accordionItems.forEach(element => {
   element.addEventListener('click', () => {
      element.classList.toggle('active');

      if(element.classList.contains('active')) {
         element.lastElementChild.style.maxHeight = element.lastElementChild.scrollHeight + 'px';
      } else {
         element.lastElementChild.style.maxHeight = '0px';
      }
   });
});


// accordionItems.forEach(element => {
//    element.addEventListener('click', () => {
//       element.classList.toggle('active');
//    });
// });
// .accordion-item-inner 각각의 요소에 클릭을 감지하는 addEventListener가 발동되면 함수가 실행되는데,
// 그 실행되는 함수는 그 요소에 active 클라스가 생겻다가 사라졋다가 하는 거임
// element 에는 .accordion-item-inner가 적용되는중



// if(element.classList.contains('active')) {
//    element.lastElementChild.style.maxHeight = element.lastElementChild.scrollHeight + 'px';
// } else {
//    element.lastElementChild.style.maxHeight = '0px';
// 만약 이 클라스가 active 클라스가 있다면 (active 상태면) 그거의 마지막 자식의 스타일 중에서 maxHeight를 그거의 마지막 자식의 scrollHeight px 단위로 설정하라. 만약 아지면 그 요소의 높이는 0으로 해라
