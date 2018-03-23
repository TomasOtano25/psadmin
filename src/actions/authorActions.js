import Dispatcher from "../dispatcher/appDispatcher";
import ActionTypes from "../constans/actionTypes";
import AuthorApi from "../api/authorApi";

const AuthorActions = {
  createAuthor(author) {
    let newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, ve dile a las tiendas que se acaba de crear un nuevo autor
    Dispatcher.dispatch({
      type: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    });
  },
  updateAuthor(author) {
    let updateAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, ve dile a las tiendas que se acaba de crear un nuevo autor
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE_AUTHOR,
      author: updateAuthor
    });
  },
  deleteAuthor(id) {
    AuthorApi.deleteAuthor(id);

    // Hey dispatcher, ve dile a las tiendas que se acaba de crear un nuevo autor
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_AUTHOR,
      id: id
    });
  }
};

export default AuthorActions;
