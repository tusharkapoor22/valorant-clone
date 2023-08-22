import { FC } from "react";
import Poster from "./poster.webp";
import logos from "../Images/cover.jpeg";

const BackgroundVideo: FC = () => (
  <div className="absolute top-0 left-0 object-cover w-full h-full z-0">
       <img src={logos}           className="w-full h-full object-cover"

alt="Logo" />
    {/* <video
      poster={Poster}
      autoPlay
      muted
      playsInline
      loop
      className="w-full h-full object-cover"
    >
      <source
        src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7f806cb08ad5d99f/61d908612e109d6c649d3b87/Disruption_VAL_DESKTOP_1730x720.mp4"
        type="video/mp4"
      />
    </video> */}
  </div>
);

export default BackgroundVideo;
