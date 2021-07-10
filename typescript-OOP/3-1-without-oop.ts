{

  type Shots = 'one shot' | 'two shots';
  function coffeeMachine(shots: Shots) {
    switch(shots) {
      case 'one shot':
        console.log(`Making coffee with one shot ...`);
      case 'two shots':
        console.log(`Making coffee with two shots ...`);
    }
  }

  coffeeMachine('one shot');
  coffeeMachine('two shots');

  // type CoffeeCup = {
  //   shots: number;
  //   hasMilk: boolean;
  // };

  // const BEANS_GRAMM_PER_SHOT: number = 7;

  // let coffeeBeans: number = 0;
  // function makeCoffee(shots: number): CoffeeCup {
  //   if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
  //     throw new Error('Not enough coffee beans!');
  //   }
  //   coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
  //   return {
  //     shots,
  //     hasMilk: false,
  //   };
  // }

  // coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  // const coffee = makeCoffee(2);
  // console.log(coffee);
}
