
import { Equipement } from 'src/app/Model/equipement';
import { DataService } from 'src/services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addEquipement',
  templateUrl:'./addEquipement.component.html',
  styleUrls: ['./addEquipement.component.css']
})
export class AddEquipementComponent implements OnInit {
  token: string | undefined;
 
  myForm!: FormGroup;
  @Output() aded = new EventEmitter<Equipement>();
  Equipement: Equipement = new Equipement();

  constructor(private equipementSer: DataService,  private formBuilder: FormBuilder) {
    this.token = undefined;
   }

  ngOnInit(): void {
    
    
    this.myForm=this.formBuilder.group({
 
      nature: ['', Validators.required],
      marque:['', Validators.required],
      Codeabarre: ['', Validators.required],
      diagnostic: ['', Validators.required],
      date_Affectation: ['', Validators.required]
    }) 
  }
  
  addEquipement(){ 
    console.log("this is "+this.myForm);
   
    console.log( this.Equipement)
     this.equipementSer.addEquipement(this.myForm.value).subscribe();
     this.aded.emit(this.myForm.value);
    // this.myForm.reset();
    // window.location.reload();
    
  }
   //---- Recaptcha ---//
   public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }
 
// wino front ! 
}

