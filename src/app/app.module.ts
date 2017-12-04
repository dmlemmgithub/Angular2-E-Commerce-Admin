import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';

import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';

import { routing } from './app.routing';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AddNewBookComponent,
    BookListComponent,
    ViewBookComponent,
    EditBookComponent,
    DialogResultExampleDialog

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    LoginService,
    AddBookService,
    UploadImageService,
    GetBookListService,
    GetBookService,
    EditBookService
    RemoveBookService
  ],
  bootstrap: [AppComponent, DialogResultExampleDialog]
})
export class AppModule { }
