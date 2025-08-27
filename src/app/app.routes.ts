import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';
import { Getapi } from './getapi/getapi';
import { Databinding } from './components/databinding/databinding';
import { Signal } from './components/signal/signal';
import { Controlflow } from './components/controlflow/controlflow';
import { AttDirective } from './components/att-directive/att-directive';
import { User } from './components/user/user';


export const routes: Routes = [
    { path: 'header', component: Header }, 
    { path: '', component: Home },
    { path: 'api', component: Getapi}, 
    { path: 'databinding', component: Databinding},
    { path: 'signal', component: Signal},
    { path: 'control-flow', component: Controlflow},
    { path: 'attDirective', component: AttDirective},
    { path: 'user', component: User}
    
    
 
];
