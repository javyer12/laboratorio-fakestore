
import { formatPrice } from "./PriceFormat.js";

const $app = document.getElementById('app');
// const Main = document.createElement("div");
// Main.className = "main"

export async function getData(API) {
      const response = await fetch(API);
      const Items = await response.json();
      console.log(Items)
      const AllItems = [];

      const render = Items.map((item) => {
            const Image = document.createElement("img");
            Image.className = "product_image"
            Image.src = item.images;

            const Title = document.createElement("h2");
            Title.className = "product_title"
            Title.textContent = item.title;

            const Price = document.createElement("p");
            Price.className = "product_price";
            Price.textContent = formatPrice(item.price);

            const sectionButton = document.createElement("div");
            sectionButton.className = "bottom__section";
            sectionButton.style.display = "flex";

            const Category = document.createElement("p");
            Category.className = "category";
            Category.textContent = `Category:  ${item.category.name}`;

            const Button = document.createElement("button");
            Button.className = "product_button";
            Button.textContent = "Buy ";
            Button.addEventListener("click", () => {
                  alert("you bought something")
            });

            sectionButton.append(Category, Button);

            const Container = document.createElement("div");
            Container.className = "container"
            Container.append(Image, Title, Price, sectionButton);
            $app.append(Container);
            AllItems.push($app);
      })
      document.body.append(...AllItems);
}