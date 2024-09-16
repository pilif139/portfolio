import { fadeIn } from '@/utils/animations';
import BurgerMenu from './BurgerMenu';
import NaviagtionButtons from './Navigation';
import Animated from '@/components/Animated';

export default function Header() {
  return (
    <Animated animation={fadeIn} className="bg-gradient-to-t from-neutral-900 to-neutral-950 flex justify-between items-center w-full h- p-5 z-10">
        <NaviagtionButtons/>
        <BurgerMenu/>
    </Animated>
  )
}