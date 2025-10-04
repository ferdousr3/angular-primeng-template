import { Injectable, inject } from '@angular/core'
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms'
import { Login } from './login.model'



@Injectable()
export class LoginFormService {
   private fb = inject(NonNullableFormBuilder)
   form = this.buildForm()

   buildForm(): FormGroup {
      const { required } = Validators
      return this.fb.group({
         email: ['', [required]],
         Password: [''],
      })
   }

   controls(control: string) {
      return this.form.get(control)
   }

   getValue() {
      return this.form.getRawValue()
   }

   patchForm(data: Login) {
      this.form.patchValue(data)
   }
}
