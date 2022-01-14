import data from "../pages/data";
const newlist = {
        print() {
            return /* html */ `
            <h2 class=" text-[20px] font-semibold">TIN TỨC HỌC TẬP</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                
                 <div class="border px-3  hover:border-red-300 py-[20px] my-[20px]">
                    <div class=" m-auto w-[280px]">
                        <a href="/new/${post.id}">
                            <img src="${post.img}" alt="" class="hover:scale-75 translate-x-4 skew-y-3 md:transform-none ease-in duration-300 ">
                        </a>
                    </div>
                    <div>
                        <a href="/new/${post.id}" class="text-[#ff9000] text-[20px] font-semibold  hover:text-[#ff0000]">
                        ${post.title}
                        </a>
                        <p>
                           ${post.desc}
                        </p>
                    </div>
                </div>
          
                `).join("")}
                
            </div>
            <h2 class="text-[20px]  font-semibold">HOẠT ĐỘNG SINH VIÊN</h2>
                       <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => `
                
                 <div class="border px-3  hover:border-red-300 py-[20px] my-[20px]">
                    <div class=" m-auto w-[280px]">
                        <a href="/new/${post.id}">
                            <img src="${post.img}" alt="" class="hover:scale-75 translate-x-4 skew-y-3 md:transform-none ease-in duration-300 ">
                        </a>
                    </div>
                    <div>
                        <a href="/new/${post.id}" class="text-[#ff9000] text-[20px] font-semibold  hover:text-[#ff0000]">
                        ${post.title}
                        </a>
                        <p>
                           ${post.desc}
                        </p>
                    </div>
                </div>
          
                `).join("")}
                
            </div>





        `;
    },
};
export default newlist;