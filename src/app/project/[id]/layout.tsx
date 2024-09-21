import ModalContextProvider from "@/app/context/ModalContext";
import SliderContextProvider from "@/app/context/ImageSliderContext";

export default function ProjectLayout({children} : {children: React.ReactNode}) {
  return (
      <SliderContextProvider>
        <ModalContextProvider>
            {children}
        </ModalContextProvider>
      </SliderContextProvider>
  )
}