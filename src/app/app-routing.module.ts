import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadChildren: () => import('./features/entrypoint/entrypoint.module').then(m => m.EntrypointModule) },
  { path: 'td-editor', loadChildren: () => import('./features/td-editor/td-editor.module').then(m => m.TdEditorModule) },
  { path: 'add-detail', loadChildren: () => import('./features/add-detail/add-detail.module').then(m => m.AddDetailModule) },
  { path: 'not-found', loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule) },
  // { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
