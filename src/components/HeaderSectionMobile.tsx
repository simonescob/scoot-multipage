const HeaderSectionMobile = (props: {text: string, img: string}) =>  {
  const { text, img } = props;
  return (
    <div className="flex justify-center items-center relative mb-10">
      <span className="absolute font-bold text-3xl font-space-mono text-white">{text}</span>
      <img src={img} alt="" />
    </div>
  )
}

export default HeaderSectionMobile;