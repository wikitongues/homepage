import Ember from 'ember';
import ResetScroll from 'homepage-cli/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
  model: function() {
    return this.store.findAll("member");
  }
});