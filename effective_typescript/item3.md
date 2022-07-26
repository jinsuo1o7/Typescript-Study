# 타입 스크립트의 코드 생성

- 최신 타입스크립트를 브라우저가 이해 가능하도록 구버전의 자바스크립트로 트랜스파일
- 코드에 타입 오류가 있는지 체크

서로 완벽히 독립적으로 작동하기 때문에 타입에 오류가 있어도 컴파일이 가능함 !

( C, java 같은 언어와 다르게 경고만 나옴 )

타입 오류가 있을때 컴파일을 시켜주지 않으려면 tsconfig.json에 `noEmitOnError`를 설정해야 함

## 런타임에는 타입 체크 불가

```tsx
interface Square{
 width: number;
}
interface Rectangle extends Square{
 heihgt: number;
}
type Shape = Square | Rectangle;
       
function calcuateArea(shape: Shape){
 if(shape instanceof Rectangle){
           // ~~~~~~ Rectangle은 타입이지만 값으로 참조 됨
  return shape.width * shape.height; // Shape에 height필드가 없음
 }else{
  return shape.width * shape.width;
 }
}
```

instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무 역할도 못함 !
런타임 시점에서 타입이 다 제거 되기 때문

## 런타임에 정보를 유지 시켜주는 방법

### in

```tsx
런타임에 정보를 유지하는 방법) in으로 필드(속성)이 존재하는지 체크하기
if('height' in shape){...}
```

### tag

```tsx
interface Square{
 kind: 'square';
 width: number;
}
interface Rectangle{
 kind: 'rectangle';
 height: number;
 width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape){
 if(shape.kind === 'rectangle'){
  ...
 }else{
  ...
 }
}
```

### 타입을 클래스로 만들기

```tsx
class Square{
 constructor(public width: number){}
}
class Rectangle extends Square{
 constructor(public width: number, public height: number){
  super(width);
 }
}
type Shape = Square | Rectangle; // 여기서는 타입으로 참조 됨

function calcuateArea(shape: Shape){
 if(shape instanceof Rectangle){ // 여기서는 값으로 참도 됨
  ...
 }
}
```

인터페이스는 타입으로만 사용이 가능하지만, Rectagneld을 클래스로 선언하면 타입과 값 모두 사용할 수 있으므로 오류가 없음

## 타입 연산은 런타임에 영향을 안줌

```tsx
function asNumber(val: number | string): number{
 return val as number; // as number ( 타입 연산 )
}
```

위 코드는 타입연산을 사용해서 숫자를 반환하려고 했지만 런타임에 작동하지 않음

```tsx
컴파일된 자바스크립트
function asNumber(val){
 return val; // 그대로 나옴..
}
```

```tsx
타입을 체크하고 Number연산을 사용해서 변환하기
function asNumber(val: number | string): number{
 return typeof(val) === 'string' ? Number(val) : val;
}
```

## 타입스크립트는 오버로딩이 없음

```tsx
function add(a: number, b: number) { return a + b; }
function add(a: string, b: string) { return a + b; }
// 오버로딩을 의도 했지만 타입 정보만 제공할 뿐, 자바스크립트로 변환하면서 다 없어짐

// 컴파일 후
function add(a, b){ return a + b; }

```
