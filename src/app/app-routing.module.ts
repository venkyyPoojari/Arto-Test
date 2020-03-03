import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './components/shop/shop.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {TermsComponent} from './components/terms/terms.component';
import {PrivacyComponent} from './components/privacy/privacy.component';


const routes: Routes = [
	{path: '', redirectTo: 'shop', pathMatch: 'full'},
	{path: 'shop', component: ShopComponent},
	{path: 'about-us', component: AboutComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'terms', component: TermsComponent},
	{path: 'policies', component: PrivacyComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
