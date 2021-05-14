import { Component } from '@angular/core';
import  excelFoldertoJson from 'excel-folder-to-json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  excelData=[];
  onFileChange(e){
    excelFoldertoJson(e,'Sheet1').then(resp=>{
     this.excelData=resp;
     console.log('asd',this.excelData)
   });
  }
}
