// Optional parameter
// 파라미터에 ?를 붙이면 넣어도 되고 안넣어도 되는 부가적 파라미터로 바뀐다.
// 필수적으로 명시해야 하는 파라미터가 아니어도 되는 것이다.
function printName(firstName: string, lastName?: string): void {
    console.log(firstName + lastName);
}

function printName2(firstName: string, lastName: string | undefined): void {
    console.log(firstName + lastName);
}

printName('O', 'Jinn');
printName('JIN');

printName2('O', 'Jinn');
printName2('JIN', undefined);



// default parameter
// 파라미터에 default 값을 지정해주면,
// default 값을 지정해준 파라미터 값에 아무런 값을 지정해주지 않아도
// 자동으로 default 값이 할당되는 파라미터이다.
function addNumber(x:number, y:number = 1): void {
    console.log(x + y);
}

addNumber(2, 5);
addNumber(1);

