import { Routes } from '@angular/router';
import { SpmComponent } from './spm/spm.component';
import { PsychometricComponent } from './psychometric/psychometric.component';

export const routes: Routes = [
    {
        path: 'spm', component: SpmComponent
    }, 
    {
        path: 'psh', component: PsychometricComponent

    }
];
