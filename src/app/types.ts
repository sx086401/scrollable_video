export type ResponseDataType = {
  items: {
    title: string;
    cover: string;
    play_url: string;
  }[];
};

export type VideoType = {
  title: string;
  cover: string;
  url: string;
};

export type VideoContextType = {
  followingList: VideoType[];
  forYouList: VideoType[];
};
