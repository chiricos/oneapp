import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guars/usuario.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canLoad: [ UsuarioGuard ]
  },
  { path: 'pagar', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'home/v2.0/invoice/2870/download/70514', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'saldo',
    loadChildren: () => import('./pages/billing/billing.module').then( m => m.BillingPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'componente/inicio',
    loadChildren: () => import('./pages/components/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'componente/action-sheet',
    loadChildren: () => import('./pages/components/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'componente/alert',
    loadChildren: () => import('./pages/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'componente/avatar',
    loadChildren: () => import('./pages/components/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'componente/buttons',
    loadChildren: () => import('./pages/components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'componente/card',
    loadChildren: () => import('./pages/components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'componente/check',
    loadChildren: () => import('./pages/components/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'componente/date-time',
    loadChildren: () => import('./pages/components/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'componente/fab',
    loadChildren: () => import('./pages/components/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'componente/grid',
    loadChildren: () => import('./pages/components/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'componente/infinite-scroll',
    loadChildren: () => import('./pages/components/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'componente/inpunt',
    loadChildren: () => import('./pages/components/inpunt/inpunt.module').then( m => m.InpuntPageModule)
  },
  {
    path: 'componente/list',
    loadChildren: () => import('./pages/components/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'componente/list-reorder',
    loadChildren: () => import('./pages/components/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },
  {
    path: 'componente/loading',
    loadChildren: () => import('./pages/components/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
