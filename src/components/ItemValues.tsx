import image from "../assets/images/our-tech.jpg";

const ItemValues = () => {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center relative border-2 border-black mb-14">
        <img className="rounded-full" src={image} alt="" />
        <div className="flex justify-center items-center absolute z-10 top-[85%] left-[40%] rounded-full font-space-mono font-bold w-20 h-20 bg-yellow-scoot">01</div>
      </div>
      <div className="font-space-mono font-bold text-2xl text-dark-navy">Our tech</div>
      <div className="font-lexend-deca text-dark-navy/50">
        We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!
      </div>
    </div>
  )
}

export default ItemValues;