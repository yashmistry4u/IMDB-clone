import React from "react";

function Banner() {
  return (
    <div
      className="h-[10vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://4kwallpapers.com/images/walls/thumbs_3t/11684.jpg)`,
      }}
    >
      <div className="text-white text-center text-xl w-full bg-gray-900/70 p-4 font-sans">
        Mission Impossible Dead Reckoning
      </div>
    </div>
  );
}

export default Banner;
