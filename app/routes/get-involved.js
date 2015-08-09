import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    closeModal: function() {
      Ember.$("section.success").hide();
      Ember.$("body").removeClass("modalFreeze");
    }
  }
});
