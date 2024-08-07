var exFirstName = ["KIM", "PARK"];
var exFitstName2 = { name: "KIM" };
var exFirstName3 = 123; // Union Type
var exFirstName4 = 123;
var john = [1, false];
var members = [1, '2', 3];
var Objects = { a: '123' };
var anyType;
anyType = 123;
anyType = '문자';
// 타입 실드 해제 문법
var anyType2;
anyType2 = 123;
anyType2 = [];
// anyType2 - 1
var age; // union Type +1 안됨
// age + 1;                    // string Type + 1 가능
// number Type + 1 가능
// 숙제 1
var user = 'kim';
var age2 = undefined;
var married = false;
var 철수 = [user, age2, married];
// 숙제 2
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function 함수(numberX) {
    return numberX * 2;
}
console.log(함수(30));
function 함수2(numberX2) {
    1 + 1; // 변수? :number는 
} // 변수 :number | undefined 와 같다.
함수2();
console.log(함수2(3));
// 퀴즈
function 함수3(x) {
    if (typeof x === 'number') { // Narrowing 으로 판정해주는 문법들
        console.log(x + 3); // typeof 변수
    }
    else { // 속성명 in 오브젝트자료
        console.log(x + '1'); // 인스턴스 instanceof 부모   
    } // 아니면 assertion 문법(타입 덮어쓰기) x as number;
} // 1. Narrowing 할때 쓰기 2. 무슨 타입이 들어올지 100% 확실할 때 사용
함수3(2);
// 숙제 1
function Hello(name) {
    if (name) {
        console.log('안녕하세요 ' + name);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
Hello('홍길동');
Hello();
// 숙제 2
function checkNumber(x) {
    if (x) {
        console.log(x.toString().length);
    }
    else {
        console.log('숫자 또는 문자가 아닙니다.');
    }
}
checkNumber(1234);
checkNumber('12345');
// 숙제 3
function 결혼가능하냐(월소득, 집보유여부, 매력점수) {
    var 월소득점수 = 월소득;
    var 집보유점수 = 0;
    if (집보유여부 == true) {
        집보유점수 = 500;
    }
    else {
        집보유점수 = 0;
    }
    var 매력포인트 = 0;
    if (매력점수 == '상') {
        매력포인트 = 100;
    }
    else {
        매력포인트 = 0;
    }
    var 총점수 = 월소득점수 + 집보유점수 + 매력포인트;
    if (총점수 > 600) {
        return '결혼가능';
    }
    else {
        return '못함';
    }
}
console.log(결혼가능하냐(700, false, '중'));
console.log(결혼가능하냐(100, false, '상'));
var 동물; //type alias
var 동물2 = { name: 'kim', age: 21 };
var 출생지역 = { region: 'seoul' }; // const 변수는 등호로 재할당만 막아줌, object 수정은 자유롭게 가능.
출생지역.region = 'busan';
var 여친 = {
    name: '전소민'
};
var position = { x: 20, y: 30 };
var test = {
    color: 'red',
    size: 10,
    position: [10, 20],
};
var test2 = {
    name: 'kim',
    phone: 123,
    email: 'abc@naver.com'
};
var test3 = {
    name: 'kim',
    phone: 123,
    email: 'abc@naver.com',
    adult: true,
};
// 더 엄격한 타입 지정 가능 Literal types
var typeName;
// typeName = 456;
var Me;
Me = '대머리';
function 가위바위보(a) {
    return [a];
}
console.log(가위바위보('가위'));
// const 변수의 한계
// Literal type은 const 변수와 유사하게 사용 가능 *자료를 여러개 저장할 수 있는 const 변수라고 생각하기
// Literal type의 문제점
var 자료 = {
    name: 'kim'
}; // 1. 이 object는 literal type 지정을 알아서 해주세요. 2. object 속성들에 모두 readonly 붙여줌
function 내함수(a) {
}
var 함수4 = function () {
    return 0;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수(phoneNumber, cutZero, removeDash) {
    var result = cutZero(phoneNumber);
    var result2 = removeDash(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash);
