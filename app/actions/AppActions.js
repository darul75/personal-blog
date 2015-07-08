import alt from '../alt';

class AppActions {
  constructor() {
    this.generateActions(
      'hidePostMenu',
      'showPostMenu'
    );
  }
}

module.exports = alt.createActions(AppActions);
