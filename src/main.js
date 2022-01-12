import Navigo from "navigo";
import HomePase from "./pages/home";
import AboutPage from "./pages/About";
import product from "./pages/product.js";
import Header from "./components/header";
import Footer from "./components/footer";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};



router.on({
    "/": () => {
        print(HomePase.render());
    },
    "/About": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(product.render());
    },
});
router.resolve();