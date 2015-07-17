App.Router.map(function() {
  this.route("legal");
  this.route("releaseForm");
  this.resource("about", function() {
    this.route("team");
    this.route("mission");
  })
  this.resource("get_involved", function() {
    this.route("submit");
    this.route("volunteer");
    this.route("contact");
  })
})