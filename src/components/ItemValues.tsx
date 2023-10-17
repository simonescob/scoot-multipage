const ItemValues = (props: { img: string, title: string, description: string }) => {
  const { img, title, description } = props;
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center relative mb-14">
        <img className="rounded-full" src={img} alt="" />
        <div className="flex justify-center items-center absolute z-10 top-[85%] left-[40%] rounded-full font-space-mono font-bold w-20 h-20 bg-yellow-scoot">01</div>
      </div>
      <div className="font-space-mono font-bold text-2xl text-dark-navy">{title}</div>
      <div className="font-lexend-deca text-dark-navy/50">
        {description}
      </div>
    </div>
  )
}

export default ItemValues;