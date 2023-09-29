import { createContext } from "react";
import { VideoContextType } from "./types";

export default createContext<VideoContextType>({
  followingList: [],
  forYouList: [],
});
