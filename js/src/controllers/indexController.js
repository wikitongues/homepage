App.IndexController = Ember.Controller.extend({
  actions: {
    closeDonationComponent: function () {
      $(".donate-component").hide()
      console.log('woo')
    }
  }
})