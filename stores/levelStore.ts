import { observable, action } from 'mobx';

class LevelStore {
  @observable level: number = 0;
  maxLevel: number = 10;

  @action
  next = () => {
    if (this.level < this.maxLevel) {
      this.level = this.level + 1;
    }
  }

  @action
  reset = () => {
    this.level = 0;
  }
}

export default LevelStore;
