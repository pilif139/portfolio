import BurgerMenu from './BurgerMenu';
import NaviagtionButtons from './NavigationButtons';

export default function Header() {
  const MenuRoutes = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full p-5  bg-opacity-50 backdrop-blur-2xl">
          <NaviagtionButtons/>
          <BurgerMenu routes={MenuRoutes}/>
      </div>
    </>
  )
}