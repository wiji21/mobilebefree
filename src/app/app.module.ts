import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';  //setiap diimpor harus dideskripsi di ng module
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';

// import { AppRoutingModule } from './app-routing.module';
import { MemberHomeComponent } from './modules/member/pages/member-home/member-home.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberRoutingModule } from './modules/member/member-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MemberHomeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	CommonModule,
	AppRoutingModule,
	MemberRoutingModule,
	// AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
