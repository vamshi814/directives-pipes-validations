import {
 AbstractControl,
 ValidationErrors
} from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); 
    const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar;
    // return isValid ? null : { passwordStrength: 'Password must contain uppercase, lowercase, number, and special character.' };
    if(isValid) {
        return null;
    } 
    return { passwordStrength: 'Password must contain uppercase, lowercase, number, and special character.' };

}