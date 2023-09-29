import { useCallback, useState } from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";

interface Props {
  url: string;
  poster: string;
  isActive?: boolean;
}

function VideoPlayer({ url, poster, isActive = false }: Props) {
  const [playing, setPlaying] = useState<boolean>(false);

  const handleEnterView = useCallback(() => setPlaying(true), []);

  const handleExitView = useCallback(() => setPlaying(false), []);

  return (
    <div style={{ width: "auto", marginBottom: "5px" }}>
      <Waypoint
        topOffset={"50%"}
        bottomOffset={"20%"}
        onEnter={handleEnterView}
        onLeave={handleExitView}
      >
        <div>
          <ReactPlayer
            url={url}
            controls={true}
            playing={isActive === false ? false : playing}
            muted={true}
            width="auto"
            height="100vh"
            config={{
              file: {
                forceHLS: true,
                attributes: {
                  poster: poster,
                },
              },
            }}
          />
        </div>
      </Waypoint>
    </div>
  );
}

export default VideoPlayer;
