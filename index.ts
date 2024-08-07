let exFirstName :string[] = ["KIM", "PARK"];
let exFitstName2 :{name? : string} = {name : "KIM"};

let exFirstName3 :(string | number) = 123; // Union Type

type MyType = string | number;
let exFirstName4 :MyType = 123;

type Member = [number, boolean];
let john:Member = [1, false];

let members :(number | String)[] = [1, '2', 3];

let Objects :{a : string | number} = { a : '123'};

let anyType : any;
anyType = 123;
anyType = '문자'
// 타입 실드 해제 문법

let anyType2 : unknown;
anyType2 = 123;
anyType2 = [];

// anyType2 - 1

let age :string | number; // union Type +1 안됨
// age + 1;                    // string Type + 1 가능
                            // number Type + 1 가능

// 숙제 1
let user :string = 'kim';
let age2 :undefined | number = undefined;
let married:boolean = false;
let 철수:(string | undefined | number | boolean)[] = [user, age2, married];

// 숙제 2
let 학교 : { score :(number|boolean)[], teacher :string, friend :string | String[]} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John',
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];

function 함수(numberX :number) :number {
    return numberX * 2;
}

console.log(함수(30));

function 함수2(numberX2? :number) :void { // 파라미터가 옵션일 경우엔 파라미터변수? : 타입
    1 + 1;                                  // 변수? :number는 
}                                           // 변수 :number | undefined 와 같다.
함수2();
console.log(함수2(3));

// 퀴즈
function 함수3(x :number | string) :void {  // Type 이 하나로 확정되지 않아았을 경우 Type Narrowing
    if( typeof x === 'number') {            // Narrowing 으로 판정해주는 문법들
        console.log(x + 3);                 // typeof 변수
    } else {                                // 속성명 in 오브젝트자료
        console.log(x + '1')                // 인스턴스 instanceof 부모   
    }                                       // 아니면 assertion 문법(타입 덮어쓰기) x as number;
}                                           // 1. Narrowing 할때 쓰기 2. 무슨 타입이 들어올지 100% 확실할 때 사용
함수3(2);

// 숙제 1
function Hello(name? :string) :void {
    if(name) {
        console.log('안녕하세요 ' + name);
    } else {
        console.log('이름이 없습니다.');
    }
}

Hello('홍길동');
Hello();

// 숙제 2
function checkNumber(x :number | string) :void {
    if(x) {
        console.log(x.toString().length);
    } else {
        console.log('숫자 또는 문자가 아닙니다.');
    }
}

checkNumber(1234);
checkNumber('12345');

// 숙제 3
function 결혼가능하냐(월소득 :number, 집보유여부 :boolean, 매력점수: string) :string {
    
    const 월소득점수 = 월소득
    
    let 집보유점수 = 0;
    if(집보유여부 == true) {
        집보유점수 = 500;
    } else {
        집보유점수 = 0;
    }
    
    let 매력포인트 = 0;
    if(매력점수 == '상') {
        매력포인트 = 100;
    } else {
        매력포인트 = 0;
    }

    const 총점수 = 월소득점수 + 집보유점수 + 매력포인트

    if(총점수 > 600) {
        return '결혼가능'
    } else {
        return '못함'
    }
}

console.log(결혼가능하냐(700, false, '중'));
console.log(결혼가능하냐(100, false, '상'));

type Animal = string | number | undefined;
let 동물 :Animal;                           //type alias

type AnimalType = { name :string, age : number};
let 동물2 :AnimalType = { name :'kim', age : 21};

const 출생지역 = { region : 'seoul'}        // const 변수는 등호로 재할당만 막아줌, object 수정은 자유롭게 가능.
출생지역.region = 'busan';

type GrilFriendType = {
    readonly name : string,          // 읽기 전용 (수정 안됨) // 타입스크립트는 컴파일에러만 발생시킬 뿐 자바스크립트에서는 실행됨.
    age? : number
}
const 여친:GrilFriendType = {
    name : '전소민'
}

// 여친.name = '송지효'

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x : number};
type PositionY = { y : number};
type positionXY = PositionX & PositionY;    // & 연산자로 object extend 하기

let position :positionXY = { x : 20, y : 30};
// 같은 이름의 type 변수 재정의 불가능.

// 숙제 1
type Type1 = { color? : string }
type Type2 = { size : number }
type Type3 = { readonly position : number[]}
type FinalType = Type1 & Type2 & Type3;

let test = {
    color : 'red',
    size : 10,
    position : [10, 20],
}

// 숙제 2
type Type4 = {
    name : string, phone : number, email : string
}

let test2 :Type4 = {
    name : 'kim',
    phone : 123,
    email : 'abc@naver.com'
}

// 숙제 3
type Type5 = {
    name : string, 
    phone : number,
    email : string,
    adult : boolean,
}

let test3 :Type5 ={
    name : 'kim',
    phone : 123,
    email : 'abc@naver.com',
    adult : true,
}

// 더 엄격한 타입 지정 가능 Literal types
let typeName: 123;
// typeName = 456;

let Me: '대머리' | '솔로';
Me = '대머리';

function 가위바위보(a : '가위' | '바위' | '보') :string[]{
    return [a];
}

console.log(가위바위보('가위'));

// const 변수의 한계
// Literal type은 const 변수와 유사하게 사용 가능 *자료를 여러개 저장할 수 있는 const 변수라고 생각하기

// Literal type의 문제점

var 자료 = {
    name : 'kim'
} as const // 1. 이 object는 literal type 지정을 알아서 해주세요. 2. object 속성들에 모두 readonly 붙여줌

function 내함수(a : 'kim') { // kim 이라는 타입만 들어올 수 있습니다.

}

// 내함수(자료.name);   // 자료.name의 타입은 string

type 함수타입 = (a : string) => number;

let 함수4 :함수타입 = function () { // 함수표현식에서만 사용 가능.
    return 0;
}

type MemberInfo = {
    name : string,
    age : number,
    plusOne : (a :number) => number,
    changeName : () => void
}

let 회원정보 :MemberInfo = {
    name : 'kim',
    age : 30,
    plusOne(a) {
        return a + 1
    },
    changeName : () => {
        console.log('안녕')
    }
}

회원정보.plusOne(1);
회원정보.changeName();


// callBack 함수

// function 함수5(abc) {
//     abc()
// }

// function 함수6() {

// }

// 함수5(함수6);

type CutType = (x :string) => string

let cutZero :CutType = function (x){
    let result = x.replace(/^0+/, "");
    return result
}
function removeDash(x :string) :number{
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}

type 함수타입1 = (a :string) => string;
type 함수타입2 = (a : string) => number;

function 만들함수(phoneNumber :string, cutZero :함수타입1, removeDash :함수타입2) {
    let result = cutZero(phoneNumber);
    let result2 = removeDash(result);
    console.log(result2);
}

만들함수('010-1111-2222', cutZero, removeDash);