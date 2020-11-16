import { AuthorsComponent } from './Components/authors/authors.component';
import { LikeComponent } from './Components/like/like.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {path: 'like', component: LikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
