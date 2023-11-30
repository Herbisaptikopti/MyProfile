import hero from "../assets/img/Hero.svg";
import line from "../assets/img/Line.svg";
import web from "../assets/img/web.png";
import design from "../assets/img/design.png";
import foto from "../assets/img/foto.png";
import other from "../assets/img/other.png";
import carbon from "../assets/img/carbon.svg";
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
            <button className="bg-kuning text-white py-3 px-4 text-xs font-semibold rounded-lg hover:bg-ungu">
              Download Resume
            </button>
          </div>
        </div>
      </div>
      {/* ini section skill */}
      <div className="bg-gradient-to-b from-kuning to-pink-500 h-[1598px] rounded-t-[100px]">
        <div className="container px-6">
          <div className="grid grid-cols-1 place-items-center pt-7">
            <span className="text-white text-2xl font-semibold">My Skill</span>
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

        <div className="pt-12 grid grid-cols-1 place-items-center">
          <span className="text-white font-semibold text-2xl">
            My Portofolio
          </span>
        </div>
        <div className="container px-10 pt-10 gap-8 grid grid-rows-2 grid-cols-2 justify-items-center">
          <div className="card bg-ungu transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="w-full h-28 object-cover" src={web} alt="" />
            <div className="grid justify-items-center p-3">
              <span className="text-white">Web Site</span>
            </div>
          </div>
          <div className="card bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="w-full h-28 object-cover" src={design} alt="" />
            <div className="grid justify-items-center p-3">
              <span className="text-white">Design</span>
            </div>
          </div>
          <div className="card bg-kuning transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="w-full h-28 object-cover" src={foto} alt="" />
            <div className="grid justify-items-center p-3">
              <span className="text-white">Foto Edit</span>
            </div>
          </div>
          <div className="card bg-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500">
            <img className="w-full h-28 object-cover" src={other} alt="" />
            <div className="grid justify-items-center p-3">
              <span className="text-white">Other</span>
            </div>
          </div>
        </div>
        <div className="mt-10 grid justify-center">
          <button className="text-pink-600 bg-white rounded-lg text-base font-semibold py-2 px-7 w-32 grid grid-cols-2 justify-items-center items-center order-2 text-center hover:bg-ungu">
            <img className="order-1" src={carbon}></img>
            More
          </button>
        </div>
      </div>
      {/* ini section skill */}
    </div>
  );
};
export default homepage;
