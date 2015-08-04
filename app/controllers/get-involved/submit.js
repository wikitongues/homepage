import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      Ember.$(".guidelines").toggle();
    },
    openTOS: function () {
      Ember.$(".termsOfService").toggle();
    },
    openOPC: function () {
      Ember.$(".publicityClause").toggle();
    }
  }
});