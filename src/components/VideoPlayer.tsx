import { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Waypoint } from "react-waypoint";
import { topTabOffset } from "../App";

interface Props {
  url: string;
  poster: string;
  isActive?: boolean;
  index: number;
}

function VideoPlayer({ url, poster, isActive = false, index }: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPosition = window.scrollY;

    const scrollDistance = Math.abs(
      currentScrollPosition - previousScrollPosition
    );

    const halfViewportHeight = window.innerHeight / 2;

    if (scrollDistance < halfViewportHeight) {
      window.scrollTo({ top: previousScrollPosition, behavior: "smooth" });
    } else {
      setPreviousScrollPosition(currentScrollPosition);
    }
  }, [previousScrollPosition]);

  useEffect(() => {
    window.addEventListener("scrollend", handleScroll);

    return () => {
      window.removeEventListener("scrollend", handleScroll);
    };
  }, [handleScroll, previousScrollPosition]);

  const handleEnterView = useCallback(() => {
    setPlaying(true);
    window.scrollTo({
      top: index === 0 ? 0 : index * window.innerHeight + topTabOffset,
      behavior: "smooth",
    });
  }, [index]);

  const handleExitView = useCallback(() => setPlaying(false), []);

  return (
    <div style={{ width: "auto", marginBottom: "5px" }}>
      <Waypoint
        topOffset={"50%"}
        bottomOffset={"20%"}
        onEnter={handleEnterView}
        onLeave={handleExitView}
        fireOnRapidScroll={false}
      >
        <div>
          <ReactPlayer
            url={url}
            controls={true}
            playing={isActive === false ? false : playing}
            muted={true}
            width="auto"
            height={window.innerHeight}
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
