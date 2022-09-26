import {
  HomeScreenActionsEnum,
  IHomeScreen,
  IHomeScreenActions
} from "./types";

export function homeScreenReducer(state: IHomeScreen, action: IHomeScreenActions): IHomeScreen  {
  switch (action.type) {
    case HomeScreenActionsEnum.ToggleModal:
      return {...state, isModalVisible: action.payload.isModalVisible};

    case HomeScreenActionsEnum.CreatePost:
      return {...state, isModalVisible:false, posts: [...state.posts, action.payload.post]}  
   
    default:
      return {...state};
  }
} 

export const homeScreenInitialState = {
  posts: [],
  isModalVisible: false,
}