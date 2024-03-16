import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule} from '@angular/material/dialog'
import { MatTabsModule} from '@angular/material/tabs';

const Modules = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatIconModule,
  MatListModule,
  MatSortModule,
  MatDialogModule,
  MatTabsModule
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Modules
  ],
  exports: [
    Modules,
  ],
  providers: []

})
export class MaterialModule { }
