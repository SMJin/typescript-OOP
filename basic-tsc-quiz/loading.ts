{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;
  function printLoginState(correntState: ResourceLoadState) {
    switch(correntState.state) {
      case 'loading':
        console.log(`👀 loading...`);
        break;
        case 'success':
          console.log(`😃 loaded`);
          break;
        case 'fail':
          console.log(`😱 no network`);
          break;
        default:
          throw Error('404: unknown Error !');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
