import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { GameComponent } from './pages/game/game.component';


const routes: Routes = [{
	path: '',
	component: HomeComponent
},
{
	path:'callback',
	component: CallbackComponent
},
{
	path:'game/:id',
	component: GameComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
