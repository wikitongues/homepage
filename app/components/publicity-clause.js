import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideOPC: function () {
      Ember.$(".publicityClause").hide();
    }
  }
});
