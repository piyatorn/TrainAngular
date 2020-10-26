import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CommomValidator {
    static password(control:AbstractControl):ValidationErrors | null{
        const value = control.value;
        if(value.length <3){
            return {length :'minimun length is 3'}
        }
        return null;
    }
}
