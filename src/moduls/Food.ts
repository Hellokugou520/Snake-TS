// 食物类
class Food {
  // 食物元素
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    //   游戏舞台300*300大小
    let top = Math.round(Math.random() * 29) * 10;

    // 游戏舞台长宽相等，共用同一个随机值
    this.element.style.left = top + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
