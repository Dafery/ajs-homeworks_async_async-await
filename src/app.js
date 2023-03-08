import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load().then((saving) => console.log(saving));
  } catch (error) {
    console.log(error);
  }
})();
