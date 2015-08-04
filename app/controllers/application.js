import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeDonationBanner: function () {
      Ember.$(".donate-component").hide();
    }
  }
});
