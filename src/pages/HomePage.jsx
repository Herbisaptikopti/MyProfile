import hero from "../assets/img/Hero.svg";
import line from "../assets/img/Line.svg";
import { icone } from "../data";

const homepage = () => {
  return (
    <div className="bg-gradient-to-b from-ungu from--30.28% to-hijau to-149.19% h-747">
      <div className="containe p-10 ">
        <div className="grid grid-cols-1 place-items-center">
          <img src={hero} alt="hero-img" className="mt-10" />
        </div>
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-white mt-2">Hy There</h1>
          <h2 className="text-white text-xl font-semibold">
            I Am <span className="text-kuning">Herbi Saptiko</span>
          </h2>
          <h3 className="text-kuning font-semibold text-2xl">
            Welcome <span className="text-white">To My Profile</span>
          </h3>
          <p className="text-white text-xs text-center w-60">
            Ingin tahu lebih tentang saya download resume di bawah ini
          </p>
          <div className="pt-6">
            <button className="bg-kuning text-white py-3 px-4 text-xs font-semibold rounded-lg">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      {/* ini section skill */}
      <div className="bg-gradient-to-b from-kuning to-pink-500 h-747 rounded-t-[100px]">
        <div className="container px-6">
          <div className="grid grid-cols-1 place-items-center pt-7">
            <span className="text-white text-2xl font-semibold text-center">
              My Skill
            </span>
          </div>
          <div className="grid grid-rows-2 grid-cols-5 gap-1 place-items-center">
            {icone.map((img) => {
              return (
                <div className="pt-10" key={img.id}>
                  <img src={img.Image} alt="" />
                </div>
              );
            })}
          </div>
          <div className="mt-10 grid grid-cols-1 place-items-center">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      {/* ini section skill */}
      <div className="">
        <div className="container">
          <span>My Portofolio</span>
          <div className="pt-10">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default homepage;
