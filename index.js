// type
var jinsu = 'jinsuo';
var arr = ['jin', 'su'];
var union_type = 13;
var myTypeLet = ['sa', 'na'];
var booleanType = true;
var members = {
    key: 1,
    name: 'jinsu',
};
var memberA = 'jj';
var singer = {
    song_name: "aaa",
    singer_name: "bbb",
};
var pro = {
    member: ['jin', 'su'],
    days: 30,
    started: true,
};
// 클래스
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// tuple type
var john = [444, true];
// 파라미터 x는 숫자, 리턴 타입 숫자로 선언
function fun(x) {
    return x * 2;
}
// 유니온타입 더 알아보기
var unionMember = [1, 2, 3, 's'];
var obj = { key: 123 };
// any
var na = 'shield break';
na = 123;
na = {};
// type쉴드가 해제되어 아무거나 들어옴
var breaked = na;
// unknown (any와 사용법이 같음 조금 더 안전)
var na2 = 123;
na2 = 123;
na2 = {};
// any와 다르게 쉴드가 유지됨 // let breaked2:string = na2;
// typescript의 엄격성
// union type
// string과 number는 + 연산이 됨
// string|number는 독자적인 타입으로 +연산이 없음
var age;
// age+1;
// unknown타입에 숫자를 할당해도 타입이 unknown이기 때문에 연산이 안됨
var age2 = 1;
// age2-1;
var user = 'kim';
var myAge = undefined;
var married = true;
var myArr = [user, myAge, married];
var school = {
    score: [100, 99, 77],
    teacher: 'Phil',
    friend: 'jinsuo'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
var myNum = 4;
function simpleFunc(num) {
    return num * 2;
}
simpleFunc(myNum);
console.log(myNum);
// void type
function simpleFunc2(x) {
    console.log(x + 1);
}
// option parameter
// 파라미터가 있어도 되고 없어도 됨
function simpleFunc3(x) {
    console.log(x);
}
function simpleFunc4(x) {
    // parameter 가union type 이기 때문에 + 연산 못함 
    // console.log(x+3); error
    // narrowing 
    if (typeof x === 'string') { }
    if (typeof x === 'number') {
        return x + 3;
    }
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    // assertion
    // 타입 덮어 쓰기
    // union type에서 확정 지을때 사용
    // if 로 narrowing 하는게 좋음 (as는 버그 캐치를 안함)
    array[1] = x;
}
var animal = 'dog';
var animal2 = {
    name: 'cat',
    age: 4,
};
// const obj
var region = {
    location: 'seoul'
};
// const는 상수로써 변하지 않지만 const obj value는 변경 가능 
region.location = 'busan';
var girl = {
    name: 'emma',
};
var newType = {
    x: 3,
    y: 4
};
var person = {
    name: 'jinsu',
    phone: 123,
    email: 'cil@gmail.com'
};
// literal type
// 리터럴한 값만 변수에 할당할 수 있음
// 변수를 엄격하게 다룸
var literalname = 'jinsu';
var myInfo;
myInfo = 24;
// parameter를 엄격하게 관리하기 용이
function literalFun(a) {
    console.log(a);
}
function literalFun2(a) {
    return 'jhin';
}
function literalFun3(a) {
    return ['가위'];
}
var simpleObj = {
    name: 'kim'
};
function myFunc(a) { }
// literal 의 한계점
// myFunc의 파라미터로는 'kim' 만 허용
// myFunc(simpleObj.name);
// simpleObj.name은 string type이고 'kim'이 아니기때문에 parameter로 못들어 감
// solution !
// as const
var simpleObj2 = {
    name: 'kim'
};
myFunc(simpleObj2.name);
var myFunction = function (name) {
    return 4;
};
var userInfo = {
    name: 'jhin',
    plusOne: function (a) {
        return a + 4;
    },
    changeName: function () { }
};
var myObject = {
    animal: 'dog',
};
