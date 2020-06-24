import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | items/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:items/new');
    assert.ok(route);
  });
});
