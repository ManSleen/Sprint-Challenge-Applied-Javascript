class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = carouselElement.querySelector(".left-button");
    this.rightButton = carouselElement.querySelector(".right-button");
    this.images = carouselElement.querySelectorAll("img");
    this.imageIndex = 0;
    // console.log(this.leftButton);
    // console.log(this.rightButton);
    // this.images.forEach(img => console.log(img));
    // console.log(this.currentIndex);
    this.images[this.imageIndex].classList.add("img-display");
    console.log(this.images[this.imageIndex]);

    this.leftButton.addEventListener("click", () => this.back());
    this.rightButton.addEventListener("click", () => this.forward());
  }
  back() {
    this.images.forEach(el => {
      el.classList.remove("img-display");
    });
    if (this.imageIndex === 0) {
      this.imageIndex = 3;
      this.images[this.imageIndex].classList.add("img-display");
    } else {
      this.imageIndex -= 1;
      this.images[this.imageIndex].classList.add("img-display");
    }
  }
  forward() {
    this.images.forEach(el => {
      el.classList.remove("img-display");
    });
    if (this.imageIndex === 3) {
      this.imageIndex = 0;
      this.images[this.imageIndex].classList.add("img-display");
    } else {
      this.imageIndex += 1;
      this.images[this.imageIndex].classList.add("img-display");
    }
  }
}

let carousel = document.querySelector(".carousel");
console.log(carousel);

new Carousel(carousel);

let today = new Date();
console.log(today);
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[today.getUTCMonth()];
console.log(month);
document.querySelector(
  ".date"
).innerHTML = `${month} ${today.getDate()} ${today.getFullYear()} `;
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
