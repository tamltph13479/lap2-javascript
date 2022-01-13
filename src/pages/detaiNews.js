import data from "../pages/data";
const DetailNewPase = {
    render(id) {
        const result = data.find((post) => post.id === id);
        console.log(result);
        return /*html*/ `
          <div class="text-center"  > 
                <h1 class="text-[#ff9000] text-[20px] font-semibold "> ${result.title}</h1>
                  <img src="${result.img} " class="py-[20px] m-auto"/> 
                  <p> ${result.desc} </p>
    </div>
           
            `;
    },
};
export default DetailNewPase;