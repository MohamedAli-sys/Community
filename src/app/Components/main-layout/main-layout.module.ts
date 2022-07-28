import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { CoreModule } from 'src/app/Core/core.module';
import { SharedModule } from 'src/app/Modules/Shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, CoreModule, MainLayoutRoutingModule, SharedModule],
})
export class MainLayoutModule {}
