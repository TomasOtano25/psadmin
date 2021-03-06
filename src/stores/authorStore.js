import Dispatcher from "../dispatcher/appDispatcher";
import ActionTypes from "../constans/actionTypes";
import { EventEmitter } from "events";
import _ from "lodash";

// Propio
import { ReduceStore } from "flux/utils";

const CHANGE_EVENT = "change";

let _authors = [];

// addChangeListener, removeChangeListener y emitChange
const AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  getAllAuthors() {
    return _authors;
  },
  getAuthorById(id) {
    return _.find(_authors, { id: id });
  }
});

Dispatcher.register(action => {
  // logica del tipo de accion
  switch (action.type) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      let exitingAuthor = _.find(_authors, { id: action.author.id });
      let exitingAuthorIndex = _.indexOf(_authors, exitingAuthor);
      _authors.splice(exitingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, author => {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;

    default:
      break;
  }
});

export default AuthorStore;
