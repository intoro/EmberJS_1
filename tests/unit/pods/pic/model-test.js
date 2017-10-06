import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pic', 'Unit | Model | pic', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
