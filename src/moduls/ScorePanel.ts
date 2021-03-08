// 记分牌
class ScorePanel {
  // 分数等级默认值
  score = 0;
  level = 1;

  //   分数等级元素
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  //   最大等级
  maxLevel: number;
  //   多少分时升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;

    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;
