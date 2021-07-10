{

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMachine {
    static BEANS_GRAMM_PER_SHOT: number = 7; 
    coffeeBeans: number = 0;
    
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(coffeeCup: CoffeeCup) {
      if (coffeeCup.shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT > this.coffeeBeans) {
        throw Error('not enough coffee beans !');
      } else {
        console.log(`Making coffee with ${coffeeCup.shots} shots ...`);
        if (coffeeCup.hasMilk) {
          console.log(`add Milk ...`);
        }
      }
    }
  }

  const coffeeMachine = new CoffeeMachine(20);
  coffeeMachine.makeCoffee({shots:2, hasMilk:true});
  
}

// {
//   type CoffeeCup = {
//     shots: number;
//     hasMilk: boolean;
//   };

//   class CoffeeMaker {
//     static BEANS_GRAMM_PER_SHOT: number = 7; // class level
//     coffeeBeans: number = 0; // instance (object) level

//     constructor(coffeeBeans: number) {
//       this.coffeeBeans = coffeeBeans;
//     }

//     static makeMachine(coffeeBeans: number): CoffeeMaker {
//       return new CoffeeMaker(coffeeBeans);
//     }

//     makeCoffee(shots: number): CoffeeCup {
//       if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
//         throw new Error('Not enough coffee beans!');
//       }
//       this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
//       return {
//         shots,
//         hasMilk: false,
//       };
//     }
//   }

//   const maker = new CoffeeMaker(32);
//   console.log(maker);
//   const maker2 = new CoffeeMaker(14);
//   console.log(maker2);

//   const maker3 = CoffeeMaker.makeMachine(3);
// }
