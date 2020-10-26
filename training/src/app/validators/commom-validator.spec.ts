import { FormControl } from '@angular/forms';
import { CommomValidator } from './commom-validator';

describe('CommomValidator', () => {

  it('should return null when form control valie length is more then 3', () => {
    const input = new FormControl('1234');
    const result = CommomValidator.password(input);
    expect(result).toEqual(null);
  });

  it('should return error obj when form control valie length is less then 3', () => {
    const input = new FormControl('14');
    const result = CommomValidator.password(input);
    expect(result).toEqual({length:'minimum length is 3'});
  });

});
