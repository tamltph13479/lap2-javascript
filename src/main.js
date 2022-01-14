import Navigo from "navigo";
import HomePase from "./pages/home";
import AboutPage from "./pages/About";
import product from "./pages/product";
import DetailNewPase from "./pages/detaiNews";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Dashboard from "./pages/Admin/dashboard2";
import NewPage from "./pages/Admin/New";
import AddnewPage from "./pages/Admin/New/add";
import Editnews from "./pages/Admin/New/edit"
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;

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
    "/admin/news": () => {
        print(NewPage.render());
    },
    "/admin/news/add": () => {
        print(AddnewPage.render());
    },
    "/admin/news/edit/:id": ({ data }) => {
        const { id } = data;
        print(Editnews.render(id));
    },


});
router.resolve();