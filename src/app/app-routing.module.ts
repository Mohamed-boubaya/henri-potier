import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/book/book.module').then(mod => mod.BookModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing: false,
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
