import data2 from "../pages/data2";
const Newedit = {
    render(id) {
        const result = data2.find((post) => post.id === id);
        console.log(result);
        return /*html*/ `
            <h1> ${result.name}</h1>
                  <img src="${result.img}"/> 
                  <p> ${result.desc} </p>
        
            `;
    },
};
export default Newedit;