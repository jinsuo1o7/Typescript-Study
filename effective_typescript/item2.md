# Setting

1. node js 설치 [다운로드 | Node.js (nodejs.org)](https://nodejs.org/ko/download/)
2. typescript 설치 `npm install -g typescript`

## tsconfig.json

typescript 설정 파일

`tsc —init`

`"noImplicitAny" : true`

```tsx
// noImplicitAny : false
function add(a, b){ return a + b; }
암묵적으로 파라미터 타입이 any로 설정되어서 + 연산이 가능

// noImplicitAny : true
function add(a:number, b:number){ return a + b; }
타입을 분명하게 해주지 않으면 오류가 발생
```

`"strictNullChecks" : true`

undefined는 객체가 아닙니다 오류를 방지 !

```tsx
// strictNullChecks : false
const x: number = null
정상 number 에 null 할당 가능

// strictNullCheces : true
const x: number = null;
에러 number 형식에 null 할당 불가
```
