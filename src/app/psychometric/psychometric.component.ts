import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2'

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
  result = {
    'bm': 0,
    'bi': 0,
    'maths': 0,
    'sej': 0,
    'science': 0,
    'pi': 0,
    'pm': 0,
    'addmath': 0,
    'physics': 0,
    'chemistry': 0,
    'biology': 0,
    'cs': 0,
    'akaun': 0,
    'eko': 0,
    'perniagaan': 0,
    'geo': 0,
    'sainssukan': 0,
    'psv': 0
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

  predict():void{
    let dimension1 = 0
    let totalDimension1 = 0
    for(let i = 0; i < this.boolean.bool1.length; i++){
      totalDimension1 += this.boolean.bool1[i]
    }

    if(totalDimension1 >= 0){
      dimension1 = 1
    }else{
      dimension1 = 0
    }

    let dimension2 = 0
    let totalDimension2 = 0
    for(let i = 0; i < this.boolean.bool2.length; i++){
      totalDimension2 += this.boolean.bool2[i]
    }

    if(totalDimension2 >= 0){
      dimension2= 1
    }else{
      dimension2 = 0
    }

    let dimension3 = 0
    let totalDimension3 = 0
    for(let i = 0; i < this.boolean.bool3.length; i++){
      totalDimension3 += this.boolean.bool3[i]
    }

    if(totalDimension3 >= 0){
      dimension3= 1
    }else{
      dimension3 = 0
    }

    let dimension4 = 0
    let totalDimension4 = 0
    for(let i = 0; i < this.boolean.bool4.length; i++){
      totalDimension4 += this.boolean.bool4[i]
    }

    if(totalDimension4 >= 0){
      dimension4= 1
    }else{
      dimension4 = 0
    }

    let dimension5 = 0
    let totalDimension5 = 0
    for(let i = 0; i < this.boolean.bool5.length; i++){
      totalDimension5 += this.boolean.bool5[i]
    }

    if(totalDimension5 >= 0){
      dimension5= 1
    }else{
      dimension5= 0
    }

    let dimension6 = 0
    let totalDimension6 = 0
    for(let i = 0; i < this.boolean.bool6.length; i++){
      totalDimension6 += this.boolean.bool6[i]
    }

    if(totalDimension6 >= 0){
      dimension6= 1
    }else{
      dimension6 = 0
    }

    const data = {"param":[[dimension1,dimension2,dimension3,dimension4,dimension5,dimension6,
      Number(this.result.bm),
      Number(this.result.bi),
      Number(this.result.maths),
      Number(this.result.sej),
      Number(this.result.science),
      Number(this.result.pi),
      Number(this.result.pm),
      Number(this.result.addmath),
      Number(this.result.physics),
      Number(this.result.chemistry),
      Number(this.result.biology),
      Number(this.result.cs),
      Number(this.result.akaun),
      Number(this.result.perniagaan),
      Number(this.result.geo),
      Number(this.result.sainssukan),
      Number(this.result.psv)]]}
    const req = this.http.post<any>('/api/ai/sklearn/predict',data,{
      headers: {'Content-Type':'application/json; charset=utf-8'}
    });
    req.subscribe(res=>{
      Swal.fire({
        title: 'Field of Study Recommendation',
        text: res.prediction,
        icon: 'success',
        confirmButtonText: 'OK'
      })
      console.log(res.prediction)
    })
    // console.log(resp)
  }
}
