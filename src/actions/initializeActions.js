import Dispatcher from "../dispatcher/appDispatcher";
import ActionTypes from "../constans/actionTypes";
import AuthorApi from "../api/authorApi";

const InitilizeActions = {
  initApp() {
    Dispatcher.dispatch({
      type: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

export default InitilizeActions;
