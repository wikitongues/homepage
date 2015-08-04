import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('guide-volunteer', 'Integration | Component | guide volunteer', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{guide-volunteer}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#guide-volunteer}}
      template block text
    {{/guide-volunteer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
