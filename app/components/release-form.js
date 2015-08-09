import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hideTOS: function () {
      Ember.$(".termsOfService").hide();
    }
  }
});
