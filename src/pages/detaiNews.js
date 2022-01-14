import data from "./data";
import Header from "../components/header"
import Footer from "../components/footer";

const DetailNewPase = {
    render(id) {
        const result = data.find((post) => post.id === id);
        console.log(result);
        return /*html*/ `
                 <div class="max-w-5xl m-auto ">
          ${Header.render()}
          <div class="text-center"  > 
                <h1 class="text-[#ff9000] text-[20px] font-semibold "> ${result.title}</h1>
                  <img src="${result.img} " class="py-[20px] m-auto"/> 
                  <p> ${result.desc} </p>
    </div>
      ${Footer.render()}
    </div>
            `;
    },
};
export default DetailNewPase;