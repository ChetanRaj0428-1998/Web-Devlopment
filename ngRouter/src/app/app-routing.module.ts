import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path:"first", component:FirstComponent,  children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent // child route component that the router renders
    },
    {
      path: 'child-b',
      component: ChildBComponent // another child route component that the router renders
    }
  ] } ,
  {path:"first/:id", component:FirstComponent},
  {path:"second", component:SecondComponent},
  {path: '',   redirectTo: '/first', pathMatch: 'full'},
  { path: 'lazy1', loadChildren: () => import('./lazy1/lazy1.module').then(m => m.Lazy1Module) },
  { path: 'lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module) },
  {path:'**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
