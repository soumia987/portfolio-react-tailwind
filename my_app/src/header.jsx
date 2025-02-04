// import "./style.css";


function Header() {
    return (
        <nav  className="fixed top-0 left-0 w-full bg-gray-800 text-white p-8">
        <div className="container">

  
        <ul className="flex justify-center space-x-8">
                    <li><a className="text-white hover:text-blue-300" href="#Home">Soumia Iradi </a></li>
                    <li><a className="text-white hover:text-blue-300" href="#Home">Home </a></li>
                    <li><a className="text-white hover:text-blue-300" href="#About">About </a></li>
                    <li><a className="text-white hover:text-blue-300" href="#Projects">Projects </a></li>
                    <li><a className="text-white hover:text-blue-300" href="#contact">Contact </a></li>

                </ul>

          </div>

    </nav>
    );
}
export default Header;