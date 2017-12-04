import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DataService } from './shared/data.service';
import { UserFilterPipe } from './shared/user-filter.pipe';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'product',
		component: ProductComponent
	},
	{
		path: 'product/:id',
		component: ProductComponent
	},
	{
		path: '',
		component: HomeComponent
	},
	{ path: '**', component: HomeComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		TopComponent,
		BottomComponent,
		LeftComponent,
		RightComponent,
		HomeComponent,
		ProductComponent,
		UserFilterPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		AngularFontAwesomeModule,
		RouterModule.forRoot(routes)
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
