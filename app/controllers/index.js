import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,

  actions: {
    autoComplete(city) {
      if (city !== '') {
        this.store
            .query('rental', { city })
            .then((result) => this.set('filteredList', result));
      } else {
        this.set('filteredList', null);
      }
    },

    search(city) {
      if (city !== '') {
        this.store
            .query('rental', { city })
            .then((result) => this.set('model', result));
      } else {
        this.store
            .findAll('rental')
            .then((result) => this.set('model', result));
      }
    }
  }
});
