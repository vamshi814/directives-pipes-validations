import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { RoleDirectiveDirective } from './role-directive.directive';
import { AdminComponent } from './admin/admin.component';
import { ReversePipe } from './reverse.pipe';
import { StudentService } from './Services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    RoleDirectiveDirective,
    AdminComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
