import Navigo from "navigo";
import HomePase from "./pages/home";
import AboutPage from "./pages/About";
import product from "./pages/product.js";
import Header from "./components/header";
import Footer from "./components/footer";
import DetailNewPase from "./pages/detaiNews";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./Admin/dashboard";
import News from "./Admin/news";
import Newadd from "./Admin/newadd";
import Newedit from "./Admin/editnew";


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

    "/new/:id": ({ data }) => {
        const { id } = data;
        print(DetailNewPase.render(id));
    },
    "/signup": () => {
        print(Signup.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/new": () => {
        print(News.render());
    },
    "/admin/news/add": () => {
        print(Newadd.render());
    },
    "/admin/news/:id": ({ data }) => {
        const { id } = data;
        print(Newedit.render(id));
    },

});
router.resolve();