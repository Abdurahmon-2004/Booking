import Beach from "../assets/beach.jpg";

export default function Home() {
  return (
    <div>
      <div className="justify-center absolut flex ">
        <img src={Beach} alt="" className="   " />
      </div>
      <h2>
        Enjoy <span>Reserved</span> Overhead bin space
      </h2>
    </div>
  );
}
