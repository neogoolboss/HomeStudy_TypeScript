var 제목 = document.querySelector('#title');
// HTML 조작 시 narrowing 하는 방법 5가지
// 1.
if (제목 != null) {
    제목.innerHTML = '방법1 입니다.';
}
// 2. instanceof 연산자 (가장 많이 쓰임)
if (제목 instanceof Element) {
    제목.innerHTML = '방법2 입니다.';
}
// 3. as 사용하기(사용 지양하기)
var 제목2 = document.querySelector('#title');
제목2.innerHTML = '방법3 입니다.';
// 4. 오브젝트에 붙이는 ? (optional chaining)
// (1) 제목에 innerHTML이 있으면 출력
// (2) 없으면 undefined 출력
var 제목3 = document.querySelector('#title');
if (제목3 === null || 제목3 === void 0 ? void 0 : 제목3.innerHTML) {
    제목3.innerHTML = '방법4 입니다.';
}
// 5. tsconfig.json 에서 stringNullChecks : false로 변경
var 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}
var 버튼 = document.querySelector('#button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    var 이미지 = document.querySelector('#image');
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = 'test2.jpg';
    }
});
var 네이버링크들 = document.querySelectorAll('.naver');
네이버링크들.forEach(function (네이버링크) {
    if (네이버링크 instanceof HTMLAnchorElement) {
        네이버링크.href = 'https://kakao.com';
    }
});
