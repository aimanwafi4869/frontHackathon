import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-psychometric',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './psychometric.component.html',
  styleUrl: './psychometric.component.scss'
})
export class PsychometricComponent {
  age?: any
  gender?: string
  education?: any
  boolean = {
    'bool1': [],
    'bool2': [],
    'bool3': [],
    'bool4': [],
    'bool5': [],
    'bool6': [],
  }
  dimension = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0
  }
  result = {
    'bm': undefined,
    'bi': undefined,
    'maths': undefined,
    'sej': undefined,
    'science': undefined,
    'pi': undefined,
    'pm': undefined,
    'addmath': undefined,
    'physics': undefined,
    'chemistry': undefined,
    'biology': undefined,
    'cs': undefined,
    'akaun': undefined,
    'eko': undefined,
    'perniagaan': undefined,
    'geo': undefined,
    'sainssukan': undefined,
    'psv': undefined
  }

  constructor(protected http: HttpClient){}

  submit(): void{
    console.log(this.age)
    console.log(this.gender)
    console.log(this.education)
    console.log(this.result)
    console.log(this.boolean)

    //const total = Object.values(this.boolean).reduce((sum, value) => sum + (value || 0), 0);
    //console.log("Total score from boolean values:", total);
  }

  introvert(value: number): void{
    this.dimension[1]+= value

  }
  extrovert(e:any ,value: number): void{
    this.dimension[1] -= value
  }

  predict():void{
    const data = {"param":[[1,0,1,1,0,3,2,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0]]}
    const req = this.http.post<any>('/api/ai/sklearn/predict',data,{
      headers: {'Content-Type':'application/json; charset=utf-8'}
    });
    const resp = req.subscribe()
    console.log(resp)
  }
}
