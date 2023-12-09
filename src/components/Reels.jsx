import Ticker from "framer-motion-ticker";

function Reels() {
  const colors = ["#632bf3", "#f122c8", "#f16022", "#9ef344", "#44d3f3"];
  return (
    <div className="App" style={{ transform: "rotate(-15deg)" }}>
      <Ticker duration={30}>
        <img
          className="h-full pr-8"
          src="../../public/reels/webp/Folklore.webp"
        />
        <img className="h-full pr-8" src="../../public/reels/webp/Cnss.webp" />
        <img className="h-full pr-8" src="../../public/reels/webp/m3ak.webp" />
      </Ticker>
      <div className="pt-8">
        <Ticker duration={40}>
          <img
            className="h-full pr-8"
            src="../../public/reels/webp/solomon.webp"
          />
          <img
            className="h-full pr-8"
            src="../../public/reels/webp/zemium.webp"
          />
          <img className="h-full pr-8" src="../../public/reels/webp/pve.webp" />
        </Ticker>
      </div>

      {/* <Ticker duration={20}>
        {colors.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: item,
              margin: "5px",
              height: "250px",
              width: "200px",
            }}
          />
        ))}
      </Ticker> */}
    </div>
  );
}
export default Reels;
