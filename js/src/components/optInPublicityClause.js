App.OptInPublicityClauseComponent = Ember.Component.extend({
  actions: {
    hideOPC: function () {
      $(".publicityClause").hide()
    }
  }
})