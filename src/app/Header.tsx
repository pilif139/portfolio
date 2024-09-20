import { fadeIn } from '@/utils/animations';
import BurgerMenu from './BurgerMenu';
import NaviagtionButtons from './Navigation';
import Animated from '@/components/Animated';

export default function Header() {
  return (
    <>
      <Animated animation={fadeIn} className="bg-neutral-950 flex justify-between items-center w-full p-5  bg-opacity-50 backdrop-blur-2xl">
          <NaviagtionButtons/>
          <BurgerMenu/>
      </Animated>
    </>
  )
}