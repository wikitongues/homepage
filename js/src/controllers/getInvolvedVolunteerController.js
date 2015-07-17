App.GetInvolvedVolunteerController = Ember.Controller.extend({
  actions: {
    openGuidelines: function () {
      $(".guidelines").toggle()
    }
  }
})