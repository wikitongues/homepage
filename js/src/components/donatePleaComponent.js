App.DonatePleaComponent = Ember.Component.extend({
  actions: {
    closePlea: function () {
      $(".donate-overlay").hide()
      $(".donate-component").addClass('hidePlea').delay(250).queue(function() {$(this).hide()})
    }
  }
})