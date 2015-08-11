import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('mission');
    this.route('team');
  });
  this.route('getInvolved', {path:'get-involved'}, function() {
    this.route('submit');
    this.route('volunteer');
    this.route('contact');
  });
  this.route('legal');
  this.route('products', function() {
    this.route('poly');
    this.route('views');
    this.route('periodical');
  });
  this.route('press');
});

export default Router;
