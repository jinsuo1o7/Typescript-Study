// type
let jinsu:string = 'jinsuo';
let arr:string[] = ['jin', 'su'];
let union_type : string | number = 13;
let myTypeLet : myType = ['sa', 'na'];
let booleanType:boolean = true;
let members:{key:number, name:string} ={
    key:1,
    name:'jinsu',
};
let memberA = 'jj';

let singer:{song_name:string, singer_name:string} ={
    song_name:"aaa",
    singer_name:"bbb",
};


// 나만의 타입 선언하기
type myType = string | string[];
type Member = [number, boolean];
let pro:{member:string[], days:number, started:boolean}={
    member:['jin','su'],
    days:30,
    started:true,
}
// 오브젝트 키 : 밸류 선언
type ObjectType = {
    [key:string] : string,
}

// 클래스
class User{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

// tuple type
let john:Member =[444, true];

// 파라미터 x는 숫자, 리턴 타입 숫자로 선언
function fun(x:number):number{
    return x * 2;
}

// 유니온타입 더 알아보기
let unionMember:(number|string)[] = [1,2,3,'s'];
let obj:{key:string|number} = {key:123};

// any
let na:any = 'shield break';
na = 123;
na = {};
// type쉴드가 해제되어 아무거나 들어옴
let breaked:string = na;

// unknown (any와 사용법이 같음 조금 더 안전)
let na2:unknown = 123;
na2 = 123;
na2 = {};
// any와 다르게 쉴드가 유지됨 // let breaked2:string = na2;

// typescript의 엄격성
// union type
// string과 number는 + 연산이 됨
// string|number는 독자적인 타입으로 +연산이 없음
let age:string|number;
// age+1;

// unknown타입에 숫자를 할당해도 타입이 unknown이기 때문에 연산이 안됨
let age2:unknown=1;
// age2-1;

let user:string = 'kim';
let myAge:undefined|number = undefined;
let married:boolean = true;
let myArr:(string | undefined|number | boolean)[] = [user, myAge, married];

let school:{
    score:(number|boolean)[],
    teacher:string, 
    friend:string| string[]
} = {
    score : [100, 99,77],
    teacher : 'Phil',
    friend : 'jinsuo'
}

school.score[4] = false;
school.friend = ['Lee', school.teacher];


let myNum = 4;
function simpleFunc(num:number):number{
    return num * 2;
}

simpleFunc(myNum);
console.log(myNum);

// void type
function simpleFunc2(x:number):void{
    console.log(x+1);
}

// option parameter
// 파라미터가 있어도 되고 없어도 됨
function simpleFunc3(x? :number){
    console.log(x);
}

function simpleFunc4(x:number | string){
    // parameter 가union type 이기 때문에 + 연산 못함 
    // console.log(x+3); error

    // narrowing 
    if(typeof x === 'string') {}
    if(typeof x === 'number') {return x +3;}

    let array:number[] = [];
    if(typeof x ==='number'){
        array[0] = x;
    }
    
    // assertion
    // 타입 덮어 쓰기
    // union type에서 확정 지을때 사용
    // if 로 narrowing 하는게 좋음 (as는 버그 캐치를 안함)
    array[1] = x as unknown as number;
}

// type alias
// 대문자로 시작
type Animal = string | number | undefined;
let animal:Animal = 'dog';

type Animal2 = {name : string, age : number};
let animal2:Animal2 = {
    name: 'cat',
    age : 4,
}

// const obj
const region = {
    location : 'seoul'
}
// const는 상수로써 변하지 않지만 const obj value는 변경 가능 
region.location = 'busan';

// readonly
type GirlFriend = {
    readonly name : string;
}
const girl:GirlFriend = {
    name:'emma',
}

// readonly는 변경 불가
// girl.name = 'yuri';

type PositionX = {x:number};
type PositionY = {y:number};

// type extend &
type NewType = PositionX & PositionY;
let newType:NewType = {
    x:3,
    y:4
}

type Color = {color?:string, size:number, readonly position : number[]}
type Person = {name:string, phone:number, email:string};
let person = {
    name : 'jinsu',
    phone : 123,
    email : 'cil@gmail.com'
}

// literal type
// 리터럴한 값만 변수에 할당할 수 있음
// 변수를 엄격하게 다룸
let literalname : 'jinsu' = 'jinsu';
let myInfo : 'solo' | 24;
myInfo = 24;

// parameter를 엄격하게 관리하기 용이
function literalFun(a:'jin'){
    console.log(a);
}

function literalFun2(a:'jhin'):'jhin' | 'jin'{
    return 'jhin';
}

function literalFun3(a:'가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
    return ['가위'];
}

let simpleObj = {
    name : 'kim'
}

function myFunc(a:'kim'){}

// literal 의 한계점
// myFunc의 파라미터로는 'kim' 만 허용
// myFunc(simpleObj.name);
// simpleObj.name은 string type이고 'kim'이 아니기때문에 parameter로 못들어 감


// solution !
// as const
let simpleObj2 = {
    name : 'kim'
} as const
myFunc(simpleObj2.name);
// obj의 value로 변경해줌
// 모든 속성을 readonly로 해줌

// function alias
type MyFunction = (name:string)=> number;
let myFunction:MyFunction = function(name){
    return 4;
}

type MyNumber = number;
let userInfo = {
    name : 'jhin',
    plusOne(a:MyNumber):MyNumber{
        return a+4;
    },
    changeName : ()=>{}
}

type ObjectType2 = {
    [key:string] : string
}

let myObject:ObjectType2 = {
    animal : 'dog',
}