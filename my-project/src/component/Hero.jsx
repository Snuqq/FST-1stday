import HeroImg from "../assets/hero_image.png"
const Hero = () => {
  return (
    <div>
        <div className="flex flex-wrap w-full justify-center">

            <div className="flex flex-wrap px-2 py-2 w-1/2 justify-center">
            <h1 className="font-bold text-2xl">RivanCyber</h1>
            <p>JOsh howr eow ehg iwoi erge rgew gwgwwgf re reg reg  geerg  htrht nb fdreggerg
                rgrege re er gre gr e erergrgeg er ge e eeg
            </p>
            <button className="bg-gray-500 m-10 h-10 w-100 text-white hover:bg-gray-400 items-center" 
            >Enroll Now</button>
            </div>

            
    <div className="h-100 y-100 flex">
        <img src={HeroImg} alt="img"/>
    </div>
        </div>
    </div>
  )
}

export default Hero