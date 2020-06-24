import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

    title(i) {
        return `Movie ${i}`; // Movie 1, Movie 2, etc.
      },
    
      year() {
        let min = 1820;
        let max = 2019;
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    
      ISBN() {
          return faker.ISBN();
      }

});
