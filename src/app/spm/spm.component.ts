import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spm',
  standalone: true,
  imports: [],
  templateUrl: './spm.component.html',
  styleUrl: './spm.component.scss'
})
export class SpmComponent {

  constructor(protected http:HttpClient){}
  click():void{
    console.log('click+')
    const req = this.http.get<any>('/api/ai/sklearn/accuracy');
    const resp = req.subscribe()
    console.log(resp)
  }
}
