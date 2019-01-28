import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';

const routes: Routes = [
  {path:'basics',component:AngularBasicsComponent},
  {path:'pipes',component:AngularPipesComponent},
  {path:'technologies',component:TechnologiesComponent},
  {path:'casestudy',component:CaseStudyComponent,

  children:[
    {path:'users',component:UsersComponent,
     children:[
      {path:'list',component:UsersListComponent},
      {path:'table',component:UsersTableComponent},
     ]
    },
    {path:'users/:userId',component:UsersComponent},
  
    {path:'posts',component:PostsComponent},
    {path:'todos',component:TodosComponent},
    {path:'comments',component:CommentsComponent},
    {path:'albums',component:AlbumsComponent},
    {path:'photos',component:PhotosComponent},
    
  
  ]


},
  
  {path:'**',redirectTo:'basics'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
