const Header = {
    render() {
        return /*html*/ `
           <header>
            <div class="bg-indigo-900 py-5 ">
                <a href="#">
                    <img src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png" alt="" width="150" height="50px" class="m-auto">
                </a>
            </div>
            <div class="bg-[#cd7700] flex">
                <ul class="flex">
                    <li><a href="/" class="block px-4 py-3 hover:text-[#ff0000] text-[#ffffff]">Trang chủ</a></li>
                    <li><a href="/About" class="block px-4 py-3 hover:text-[#ff0000] text-[#ffffff]">Tuyển Sinh</a></li>
                    <li><a href="/product" class="block px-4 py-3 hover:text-[#ff0000] text-[#ffffff]">Trương trình đào tạo</a></li>
                    <li><a href="#" class="block px-4 py-3 hover:text-[#ff0000] text-[#ffffff]">Góc sinh viên</a></li>
                    <li><a href="#" class="block px-4 py-3 hover:text-[#ff0000] text-[#ffffff]">Tuyển dụng</a></li>
                </ul>
                <div class="px-4 py-3">
                    <input type="text">
                    <button class="bg-indigo-900 text-[#ffffff] px-4 border-solid border-2 border-White hover:text-[#ff0000] ">Tìm kiếm</button>
                </div>
            </div>
            <div class="">
                <a href="">
                    <img src="https://apolyorg.files.wordpress.com/2019/04/xbanner-trang-lien-he-moi.jpg.pagespeed.ic_.fqvwhe7pcx.jpg" alt="" width="1024px" class="my-2 hover:scale-75 translate-x-4 skew-y-3 md:transform-none ease-in duration-300 ">
                </a>
            </div>
        </header>`;
    },
};
export default Header;