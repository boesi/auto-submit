import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { validateNumber } from 'ember-changeset-validations/validators';

export default class ApplicationController extends Controller {
  @tracked item1 = 1;
  @tracked item2 = 1;

  validations = {
    item1: [
      validateNumber({gte: 1, lte: 5})
    ],
    item2: [
      validateNumber({gte: 1, lte: 5})
    ],
  };

  @action save(changeset) {
    console.log('===> controller application.save', {changeset});
  }

}
