import Dispatcher from "../dispatcher/appDispatcher";
import ActionTypes from "../constans/actionTypes";
import AuthorApi from "../api/authorApi";
import keyMirror from "react/lib/keyMirror";

const AuthorActions = {
  createAuthor(author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      type: ActionTypes.CREATE_AUTHOR,
      author: AuthorApi.getAllAuthors()
    });
  }
};

export default AuthorActions;
