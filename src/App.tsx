import { useCallback, useContext, useState } from "react";
import "./App.css";
import videoContext from "./app/videoContext";
import Tab from "./components/Tab";
import { TabType } from "./types";
import VideoList from "./app/VideoList";

export const topTabOffset = 35;

function App() {
  const { followingList, forYouList } = useContext(videoContext);
  const [tab, setTab] = useState<TabType>(TabType.Following);

  const handleFollowingClick = useCallback(() => setTab(TabType.Following), []);

  const handleForYouClick = useCallback(() => setTab(TabType.ForYou), []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: topTabOffset,
        }}
      >
        <Tab
          text={"Following"}
          selected={tab === TabType.Following}
          onClick={handleFollowingClick}
        />
        <Tab
          text={"For You"}
          selected={tab === TabType.ForYou}
          onClick={handleForYouClick}
        />
      </div>
      <VideoList
        isActive={tab === TabType.Following}
        videoList={followingList}
      />
      <VideoList isActive={tab === TabType.ForYou} videoList={forYouList} />
    </div>
  );
}

export default App;
