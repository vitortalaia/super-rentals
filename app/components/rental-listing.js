import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,

  actions: {
    toggleImage() {
      this.toggleProperty('isImageShowing');
    }
  }
});
