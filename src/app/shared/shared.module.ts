import { MeuPipePipe } from './pipes/meu-pipe.pipe';
import { NumericoDirective } from './directives/numerico.directive';
import { MinimoValidatorDirective } from './directives/minimo-validator.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
  ]
})
export class SharedModule { }
