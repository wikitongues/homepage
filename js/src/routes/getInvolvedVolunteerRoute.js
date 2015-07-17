App.GetInvolvedVolunteerRoute = Ember.Route.extend(App.ResetScroll, {
  renderTemplate: function() {
    this.render('get_involved/volunteer')
  },
  actions: {
    closeModal: function() {
      $("section.success").hide()
      $("body").removeClass("modalFreeze")
    }
  }
})