import { Component } from '@angular/core';

@Component({
  selector: 'app-spm',
  standalone: true,
  imports: [],
  templateUrl: './spm.component.html',
  styleUrl: './spm.component.scss'
})
export class SpmComponent {

  click():void{
    console.log('click')
  }
}
