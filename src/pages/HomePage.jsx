import hero from "../assets/img/Hero.svg";
import line from "../assets/img/Line.svg";
import web from "../assets/img/web.png";
import design from "../assets/img/design.png";
import foto from "../assets/img/foto.png";
import other from "../assets/img/other.png";
import carbon from "../assets/img/carbon.svg";
import { icone } from "../data";
import FooterComponent from "../components/FooterComponent";

// ini untuk perintah download file yang ada di folder public
const Resume_File_URL = "http://localhost:5173/resume.pdf";

const homepage = () => {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  // ini untuk perintah download file yang ada di folder public

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
            <button
              onClick={() => {
                downloadFileAtURL(Resume_File_URL);
              }}
              className="bg-kuning text-white py-3 px-4 text-xs font-semibold rounded-lg hover:bg-ungu"
            >
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

        <div className="grid justify-items-center mt-16">
          <span className="text-white text-base text-center w-72">
            Jika Anda Tertarik Dengan Saya, Silahkan Hubungi Saya
          </span>
        </div>

        <div className="container px-6 mx-auto justify-items-center pt-10">
          <from>
            <div className="grid grid-rows-2 grid-cols-2 gap-4 items-center justify-items-center">
              <input
                className="p-5 w-[168px] h-14 rounded-lg bg-white bg-opacity-30 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                name=""
                id=""
                placeholder="First Name"
              />
              <input
                className="p-5 w-[168px] h-14 rounded-lg bg-white bg-opacity-30"
                type="text"
                name=""
                id=""
                placeholder="Last Name"
              />
              <input
                className="p-5 w-[168px] h-14 rounded-lg bg-white bg-opacity-30"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <input
                className="p-5 w-[168px] h-14 rounded-lg bg-white bg-opacity-30"
                type="number"
                name=""
                id=""
                placeholder="Phone Number"
              />
            </div>
            <div className="grid grid-rows-1 grid-cols-1 items-center justify-items-center mt-5">
              <input
                className="p-5 w-[360px] h-48 rounded-lg bg-white bg-opacity-30 active:border-none"
                type="text"
                name=""
                id=""
                placeholder="Message"
              />
            </div>

            <div className="grid justify-items-center mt-9">
              <button className="w-32 text-blue-500 rounded-lg text-base font-semibold hover:bg-ungu hover:text-white bg-white py-4">
                Send
              </button>
            </div>
          </from>
          <div className="text grid justify-center mt-12">
            <span className="text-white text-center w-72">
              Thank you for visiting, have a nice day. contact me if you need
              help
            </span>
          </div>
        </div>
        <FooterComponent />
      </div>
      {/* ini section skill */}
    </div>
  );
};
export default homepage;
