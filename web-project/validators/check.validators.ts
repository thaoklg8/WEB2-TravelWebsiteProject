import { AbstractControl } from "@angular/forms"

export function passwordValidator(control: AbstractControl):{
    [key: string]:any} | null{
        const pwd = control.get('pwd')
        const confirmpwd= control.get('confirmpwd')
        if((pwd &&pwd.pristine)||( confirmpwd &&confirmpwd.pristine)){
            return null
        }
        return pwd && confirmpwd && pwd.value !=confirmpwd.value ? {'misMatch':true} :null
    }
