import { 
  HomeScreenActionsEnum,
  ICreatePostAction, 
  ICreatePostPayload, 
  IToggleModalAction, 
  IToggleModalPayload 
} from "./types";

function toggleModal(payload: IToggleModalPayload): IToggleModalAction  {
  return {
      type: HomeScreenActionsEnum.ToggleModal,
      payload,
  }
}

function createPost(payload: ICreatePostPayload): ICreatePostAction{
  return {
    type: HomeScreenActionsEnum.CreatePost,
    payload,
  }
}

export const HomeScreenActions ={
  toggleModal,
  createPost,
}