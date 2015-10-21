export function initialize(/* container, application */) {
  var inflector = Ember.Inflector.inflector;
  inflector.irregular('campus', 'campuses');
}

export default {
  name: 'inflections',
  initialize: initialize
};
