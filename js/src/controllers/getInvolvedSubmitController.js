App.GetInvolvedSubmitController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    },
    openTOS: function () {
      $(".termsOfService").toggle()
    },
    openOPC: function () {
      $(".publicityClause").toggle()
    }
  }
})