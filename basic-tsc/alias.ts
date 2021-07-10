{
    /*
    *   TYPE ALIAS
    */

    // 원시적인 타입인 string 을 재정의 해보았다.
    type Text = string;
    const name: Text = 'Jinn_O';
    const address: Text = 'Korea';
    
    // Object 도 type 으로 지정할 수 있다!
    type User = {
        name: string;
        age: number;
    }
    const user: User = {
        name: 'Jinn_o',
        age: 1000
    }



    /**
     * String Literal Type
     */
    
    // 이를 이용하면 무조건 지정된 문자열만을 불러올 수 있다.
    // 오타가 쉽게 나는 상황이라던가에 유용하게 쓰인다.
    type Name = 'Jinn_o';
    const userName:Name = 'Jinn_o';
}
