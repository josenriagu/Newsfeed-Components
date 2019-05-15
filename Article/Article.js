// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');   
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach((article) => {
  new Article(article);
})

// STRETCH ANIMATION
// Create variables
const artty = document.querySelectorAll('.article');
const menu1 = document.querySelector('.menu-button')

window.addEventListener('load', () => {
  TweenMax.from(artty, 3, { opacity: 0, bottom:600 });
  // TweenMax.from(articler, 10, { x:600, rotation:360, scale:0.5 });
  // console.log('LOADEEEDDDD!!!!!')
  // TweenMax.to('.intro', 1.5, { opacity: 1, delay: 1.5 });
  // TweenMax.to('.content-section', 1.5, { opacity: 1, delay: 3 });
  // TweenMax.to('.content-destination', 1.5, { opacity: 1, delay: 4.5 });
  // TweenMax.to('.content-pick', 1.5, { opacity: 1, delay: 5.5 });
  // TweenMax.to('.footer', 1.5, { opacity: 3, delay: 6.5 });
});

// menu1.addEventListener('click', () => {
//   console.log('clicked')
//   TweenLite.from(menu1, 1, { ease: Bounce.easeInOut, x: 1200 });
// })

// TweenMax.to('.menu-button', 2, {left: 600, backgroundColor: 'red'});
// TweenMax.to(article, 2, {boxShadow:"0px 0px 20px red", color:"red", ease: power4});
// TweenLite.to(articler, 2.5, { ease: Power4.easeInOut, x: "400%" });