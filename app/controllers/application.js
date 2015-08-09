import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    closeDonationBanner: function () {
      Ember.$(".donate-overlay").hide();
      Ember.$(".donate-component").addClass('hidePlea').delay(250).queue(function() {Ember.$(this).hide();});
      Ember.$("nav .top-nav li.donate").delay(1200).queue(function() {Ember.$(this).css("width","95px");});
    }
  }
});
