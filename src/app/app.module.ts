import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatCheckboxModule, MatInputModule, MatDialogModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'register/:id', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    HttpModule, MatDialogModule, BrowserModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatCheckboxModule, MatInputModule, RouterModule.forRoot(routes), FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
