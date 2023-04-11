import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CategoryFilterPipe } from './pipes/category-filter.pipe';
import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './pipes/search-filter.pipe';


@NgModule({
	declarations: [
		CatalogueComponent,
		CategoryFilterPipe,
  SearchFilterPipe
	],
	imports: [
		CommonModule,
		CatalogueRoutingModule,
		SharedModule,
		NgxPaginationModule
	]
})
export class CatalogueModule { }
