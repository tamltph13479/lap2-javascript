import data from "../pages/data";
const DetailNewPase = {
    render(id) {
        const result = data.find((post) => post.id === id);
        console.log(result);
        return /*html*/ `
            <h1> ${result.title}</h1>
                  <img src="${result.img}"/> 
                  <p> ${result.desc} </p>
        
            `;
    },
};
export default DetailNewPase;