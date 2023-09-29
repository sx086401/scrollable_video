import { PropsWithChildren, useEffect, useState } from "react";
import VideoContext from "./videoContext";
import axios from "axios";
import { VideoType, ResponseDataType } from "./types";

function convertResponseData(response: ResponseDataType): VideoType[] {
  return response.items.map(({ cover, play_url, title }) => ({
    title,
    cover,
    url: play_url,
  }));
}

function VideoProvider({ children }: PropsWithChildren) {
  const [followingList, setFollowingList] = useState<VideoType[]>([]);
  const [forYouList, setForYouList] = useState<VideoType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const followingResult = await axios<ResponseDataType>(
        "http://localhost:8088/following_list"
      );
      const forYouResult = await axios<ResponseDataType>(
        "http://localhost:8088/for_you_list"
      );

      setFollowingList(convertResponseData(followingResult.data));
      setForYouList(convertResponseData(forYouResult.data));
    };

    fetchData();
  }, []);

  return (
    <VideoContext.Provider value={{ followingList, forYouList }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoProvider;
