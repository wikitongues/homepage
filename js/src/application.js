var App = Ember.Application.create({
});
// Resets scroll
App.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
App.ApplicationAdapter = DS.FixtureAdapter.extend({
})