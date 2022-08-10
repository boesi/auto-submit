import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { validateNumber } from 'ember-changeset-validations/validators';

export default class ApplicationController extends Controller {
  @tracked itemAutoSubmit = 1;
  @tracked itemNoAutoSubmit = 1;

  validations = {
    itemAutoSubmit: [
      validateNumber({gte: 1, lte: 5})
    ],
    itemNoAutoSubmit: [
      validateNumber({gte: 1, lte: 5})
    ],
  };

  @action save(changeset) {
    console.log('===> controller application.save', {changeset});
  }

}
