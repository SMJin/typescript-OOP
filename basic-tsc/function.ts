// Optional parameter
// 파라미터에 ?를 붙이면 넣어도 되고 안넣어도 되는 부가적 파라미터로 바뀐다.
// 필수적으로 명시해야 하는 파라미터가 아니어도 되는 것이다.
function printName(firstName: string, lastName?: string): void {
    console.log(firstName + lastName);
}

printName('O', 'Jinn');
printName('JIN');