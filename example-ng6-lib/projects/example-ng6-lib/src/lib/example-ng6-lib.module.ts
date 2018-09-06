import { NgModule } from '@angular/core';
import { ExampleNg6LibComponent } from './example-ng6-lib.component';
import { TestExampleLibComponent } from './test-example-lib/test-example-lib.component';

@NgModule({
  imports: [
  ],
  declarations: [ExampleNg6LibComponent, TestExampleLibComponent],
  exports: [ExampleNg6LibComponent, TestExampleLibComponent]
})
export class ExampleNg6LibModule { }
