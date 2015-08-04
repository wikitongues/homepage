import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideGuidelines: function () {
      Ember.$(".guidelines").hide();
    }
  }
});
