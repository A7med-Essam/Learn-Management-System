import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { innerLayoutRoutingModule } from './innerLayout-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { innerLayoutComponent } from './innerLayout.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    innerLayoutComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    innerLayoutRoutingModule,
    MatTabsModule,
    CarouselModule,
    MatButtonModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class innerLayoutModule { }
