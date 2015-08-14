import Ember from 'ember';
import ResetScroll from 'homepage-cli/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  actions: {
    closeModal: function() {
      Ember.$("section.success").hide();
      Ember.$("body").removeClass("modalFreeze");
    }
  }
});