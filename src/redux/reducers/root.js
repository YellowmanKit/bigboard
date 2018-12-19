import { combineReducers } from "redux";
import main from './control/main';
import content from './control/content';
import ui from './control/ui';
import modal from './control/modal';

import user from './data/user';

const rootReducer = combineReducers({
  main,
  content,
  ui,
  modal,

  user
});

export default rootReducer;
