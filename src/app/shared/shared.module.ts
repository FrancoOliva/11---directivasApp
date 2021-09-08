import { NgModule } from '@angular/core';
import { ErrorMsgDirective } from './directives/error-msg.directive';



@NgModule({
  declarations: [
    ErrorMsgDirective
  ],
  imports: [
    //CommonModule
  ],
  exports: [
    // exportamos para que otros módulos puedan usar esta directiva personalizada
    ErrorMsgDirective
  ]
})
export class SharedModule { }
