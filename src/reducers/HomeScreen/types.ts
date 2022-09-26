export enum HomeScreenActionsEnum {
  ToggleModal = 'TOGGLE_MODAL',
  CreatePost = 'CREATE_POST'
}

export type IPost = {
  id: number;
  title: string;
  body: string;
}
export type IHomeScreen = {
  isModalVisible: boolean;
  posts: IPost[];
}

export type IToggleModalPayload = {
  isModalVisible: boolean;
}

export type IToggleModalAction = {
  type: HomeScreenActionsEnum.ToggleModal;
  payload: IToggleModalPayload;
}

export type ICreatePostPayload = {
  post: IPost;
 }

export type ICreatePostAction ={
  type: HomeScreenActionsEnum.CreatePost;
  payload: ICreatePostPayload;
}

export type IHomeScreenActions = IToggleModalAction | ICreatePostAction;