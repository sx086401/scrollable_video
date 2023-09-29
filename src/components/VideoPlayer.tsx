import ReactPlayer from "react-player";

interface Props {
  url: string;
  poster: string;
}

function VideoPlayer({ url, poster }: Props) {
  return (
    <div style={{ width: "auto", marginBottom: "5px" }}>
      <ReactPlayer
        url={url}
        controls={true}
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
  );
}

export default VideoPlayer;
