import newlist from "../components/newlist";
import Banner from "../components/banner";
const HomePase = {
    render() {
        return /*html*/ `
         <main>
                <div class="">
                    <a href="">
                          ${Banner.render()}
                     </a>
                </div>
      <div> 

     ${newlist.print()}

      </div>
        </main>
            `;
    },
};
export default HomePase;