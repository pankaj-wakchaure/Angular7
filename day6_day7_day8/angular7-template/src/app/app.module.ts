import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotosComponent } from './photos/photos.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
@NgModule({
  declarations: [//components,directives,pipes
    AppComponent, AngularBasicsComponent, TechnologiesComponent, AngularPipesComponent,
     UsersComponent, PostsComponent, AlbumsComponent, TodosComponent,
      CommentsComponent, PhotosComponent, CaseStudyComponent, GenderPipe, OrderByPipe, UsersListComponent, UsersTableComponent
  ],
  imports: [//modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],//services
  bootstrap: [AppComponent] //components
})
export class AppModule { }
