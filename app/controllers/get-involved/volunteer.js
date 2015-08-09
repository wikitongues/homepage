import Ember from 'ember';

export default Ember.Controller.extend({
  name: "",
  email: "",
  location: "",
  otherVolunteer: "",
  message: "",
  actions: {
    openGuidelines: function () {
      Ember.$(".guidelines").toggle();
    },
    submit: function() {
      Ember.$.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'ZMiPM6bTRAzqjOaIqzn-tA',
          'message': {
          'from_email': this.get("email"),
          'to': [
            {
              'email': 'hello@wikitongues.org',
              'name': 'Wikitongues',
              'type': 'to'
            }
          ],
          'autotext': 'true',
          'subject': 'New Volunteer:'+this.get("location"),
          'html': "Name of submitter: "+this.get("name")+
            "<br/>Email: "+this.get("email")+
            "<br/>Location of volunteer: "+this.get("location")+
            "<br/>Ambassador: "+this.get("ambassador")+
            "<br/>Social Media: "+this.get("socialMedia")+
            "<br/>Developer: "+this.get("webDev")+
            "<br/>Other: "+this.get("otherVolunteer")+
            "<br/>Message: "+this.get("message")
          }
        }
      }).done(function(response) {
        var status = response[0].status;
        if(status === 'sent') {
          Ember.$("section.success").show();
          Ember.$("body").addClass("modalFreeze");
          Ember.$(".getInvolvedVolunteer ul li input, .getInvolvedVolunteer textarea").val("").attr("checked", false);
        }
      });
    }
  }
});
