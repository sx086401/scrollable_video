import VideoPlayer from "../components/VideoPlayer";
import { VideoType } from "./types";

interface Props {
  isActive?: boolean;
  videoList: VideoType[];
}

function VideoList({ videoList, isActive = false }: Props) {
  return (
    <div style={{ display: isActive ? "" : "none" }}>
      {videoList.map(({ title, cover, url }, index) => (
        <VideoPlayer
          key={title}
          url={url}
          poster={cover}
          isActive={isActive}
          index={index}
        />
      ))}
    </div>
  );
}

export default VideoList;
