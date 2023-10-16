import { ItemHomeProps } from "../types/global";
import ButtonYellow from "./ButtonYellow";

import leftArrow from "../assets/patterns/left-downward-arrow.svg";
import rightArrow from "../assets/patterns/right-arrow.svg";

const ItemHome = (props: ItemHomeProps) => {
  const { index, item } = props;

  const stylesByItem = (key: number): string => {
    switch (key) {
      case 0:
        return 'top-60 -right-52 scale-[2]';
      case 1:
        return 'top-10 -left-44 scale-[1.3]';
      case 2:
        return 'top-14 -right-[325px] scale-[2]';
    }
    return '';
  }

  console.log(index)
  // console.log(key, stylesByItem(key))

  return (
    <div key={index} className="flex flex-col justify-center items-center text-center space-y-6 relative w-80">
      <div className={`absolute top-0 w-screen h-96 z-10 overflow-hidden`}>
        <img className={`relative ${stylesByItem(index)}`} src={index === 1 ? rightArrow : leftArrow} alt="arrow" />
      </div>
      <img className="rounded-full" src={item.img} alt="locate" />
      <h2 className="font-space-mono font-bold text-3xl text-dark-navy">{item.title}</h2>
      <div className="text-base font-lexend-deca text-dim-grey">{item.text}</div>
      <ButtonYellow text="Learn more" />
    </div>
  )
}

export default ItemHome