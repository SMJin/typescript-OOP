{
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');


    type SuccessState = {
        response: {
            body: string;
        }
    }

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(id:string): LoginState {
        if (id === 'j') {
            return {
                response: {
                    body: 'congreturations !!!'
                }
            }
        }

        return {
            reason: 'not matching id ...'
        }
    }

}