import { getData } from './components/GetProducts.js';


const $observe = document.getElementById('observe');
const $appStore = document.getElementById('appStore');
const API = 'https://api.escuelajs.co/api/v1/products';


const Images = [
  "https://www.teahub.io/photos/full/252-2524111_great-place-to-relax-hd-desktop-wallpaper-background.jpg",

  "https://media.istockphoto.com/id/1419638594/photo/the-sainte-victoire-mountain-in-the-light-of-a-summer-morning.jpg?b=1&s=170667a&w=0&k=20&c=DykHLlxIYkrRh6u9uW7bR4N6ZIKBEmizINlfTXtPB-k=",

  "https://www.akc.org/wp-content/uploads/2017/11/Great-Pyrenees-puppy-sittin-in-a-chair-outdoors.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg/640px-Amphiprion_ocellaris_%28Clown_anemonefish%29_by_Nick_Hobgood.jpg",

  "https://images.genius.com/5ef9c1097895c65105dfe0ea9112f68b.1000x1000x1.jpg",

  "https://api.time.com/wp-content/uploads/2018/05/forest-bathing.jpg"
]
// get a random number
const getRandomInt = Math.floor(Math.random() * 5);
// get a random image with getRandomInt
const RandomImage = Images[ getRandomInt ];

function welcomeMessage() {
  const Image = document.createElement("img");
  Image.className = "welcome_image"
  Image.src = RandomImage;

  const Title = document.createElement("h2");
  Title.className = "welcome_title"
  Title.textContent = "It's a good day to go for shopping";

  const Button = document.createElement("button");
  Button.className = "welcome_button";
  Button.textContent = "Let's Buy Something";
  Button.addEventListener("click", () => {
    Container.style.height = " 40vh";
    getData(API);
  });

  const WelcomeContainer = document.createElement("div");
  WelcomeContainer.className = "welcome__container-button";
  WelcomeContainer.append(Title, Button);

  const Container = document.createElement("div");
  Container.className = "welcome_container"
  Container.append(Image, WelcomeContainer);


  $appStore.append(Container);
}


welcomeMessage();
// const loadData = () => {
//   getData(API);
// }
// getData(API)
const intersectionObserver = new IntersectionObserver(entries => {
  // logic...
}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);
