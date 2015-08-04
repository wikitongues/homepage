import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('publicity-clause', 'Integration | Component | publicity clause', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{publicity-clause}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#publicity-clause}}
      template block text
    {{/publicity-clause}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
