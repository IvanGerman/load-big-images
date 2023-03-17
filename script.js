let image = document.images[0];
console.log(image.src);  

const bigImage = document.createElement('img');
bigImage.onload = function() {
  image.src = this.src;
  image.className = 'noblur';  
};

bigImage.src = 'http://127.0.0.1:5500/assets/images/bg2-big.jpg';

// setTimeout( () => {
//   bigImage.src = 'http://127.0.0.1:5500/assets/images/bg2-big.jpg';
// }, 1000)

