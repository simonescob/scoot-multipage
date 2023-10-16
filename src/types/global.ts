export type ItemHomeType = {
  img: string,
  title: string,
  text: string,
}

export interface ItemHomeProps {
  index: number,
  item: ItemHomeType,
}