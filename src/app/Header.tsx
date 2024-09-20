import BurgerMenu from './BurgerMenu';
import NaviagtionButtons from './NavigationButtons';

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center w-full p-5  bg-opacity-50 backdrop-blur-2xl">
          <NaviagtionButtons/>
          <BurgerMenu/>
      </div>
    </>
  )
}