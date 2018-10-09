import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberHomeComponent }      from './modules/member/pages/member-home/member-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',
	component: MemberHomeComponent
  },
];


@NgModule({
 imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	declarations: []
})
export class AppRoutingModule {}