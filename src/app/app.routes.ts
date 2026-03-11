import { Routes } from '@angular/router';
import { Layout } from './common-ui/layout/layout';
import { AnglesConverter } from './pages/angles-converter/angles-converter';

export const routes: Routes = [
    { path:'', component: Layout, children: [
        { path:'', component: AnglesConverter } 
    ] 
    }
];
