import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageProtegidoGuard } from './guards/page-protegido.guard';
import { GeneraQRPageModule } from './pages/genera-qr/genera-qr.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [PageProtegidoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
  path: 'genera-qr',
  loadChildren: () => import('./pages/genera-qr/genera-qr.module').then(m => m.GeneraQRPageModule)
},
{
  path: 'reestablecer',
    loadChildren: () => import('./pages/reestablecer/reestablecer.module').then(m => m.ReestablecerPageModule)
},
{
  path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
},

{
  path: '**',
    redirectTo: 'not-found',
      pathMatch: 'full'
},
{
  path: 'reestablecer',
    loadChildren: () => import('./pages/reestablecer/reestablecer.module').then(m => m.ReestablecerPageModule)
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
