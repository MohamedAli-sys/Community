import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../Materials/materials.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialsModule],
  exports: [MaterialsModule],
})
export class SharedModule {}
