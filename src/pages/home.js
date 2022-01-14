import Header from "../components/header"
import Footer from "../components/footer";
import newlist from "../components/newlist";
import Banner from "../components/banner";
const HomePase = {
    render() {
        return /*html*/ `
        <div class="max-w-5xl m-auto ">
                ${Header.render()}
         <main >
                <div class="">
                    <a href="">
                          ${Banner.render()}
                     </a>
                </div>
      <div> 

     ${newlist.print()}

      </div>
        </main>
           ${Footer.render()}
    </div>
            `;
    },
};
export default HomePase;