import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('search');

  this.route('item', function() {});

  this.route('items', { path: '/list' }, function() {
    this.route('new');
    this.route('item', { path: '/:item_id' }, function() {
      this.route('edit');
      this.route('list', function() {
        this.route('unit'), { path: '/:unit_id' };
      });
    });
   });
});
