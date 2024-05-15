export default class Liker {
  constructor() {
    this.likerDiv = document.querySelector('.liker');
    this.likerBtn = document.querySelector('.liker-btn');
    this.isDown = false;
    this.likerId = null;
  }

  init() {
    this.events();
  }

  events() {
    this.likerBtn.addEventListener('mousedown', () => {
      this.isDown = true;
      this.doLike();
    });

    this.likerBtn.addEventListener('mouseup', () => {
      this.isDown = false;
    });

    this.likerBtn.addEventListener('mouseleave', () => {
      this.isDown = false;
    });
  }

  doLike() {
    clearTimeout(this.likerId);
    if (!this.isDown) return;

    const heart = document.createElement('div');
    heart.classList.add('liker-img');
    this.likerDiv.append(heart);

    const randomAnimation = this.constructor.getRandomInt(3);
    heart.classList.add(`liker-img-animation${randomAnimation}`);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });

    this.likerId = setTimeout(() => this.doLike(), 100);
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max + 1);
  }
}
