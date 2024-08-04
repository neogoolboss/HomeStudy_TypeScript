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
