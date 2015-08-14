import Ember from 'ember';
import ResetScroll from 'homepage-cli/mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll("press");
  }
});
