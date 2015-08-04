import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeDonationBanner: function () {
      Ember.$(".donate-overlay").hide();
      Ember.$(".donate-component").addClass('hidePlea').delay(250).queue(function() {$(this).hide()});
    }
  }
});
