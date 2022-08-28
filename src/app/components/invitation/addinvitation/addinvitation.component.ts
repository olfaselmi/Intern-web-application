import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { invitation } from 'src/app/Model/invitation';
import { DataService } from 'src/services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-addinvitation',
  templateUrl: './addinvitation.component.html',
  styleUrls: ['./addinvitation.component.css']
})
export class AddinvitationComponent implements OnInit {
  token: string | undefined;

  myForm: FormGroup;
  @Output() aded = new EventEmitter<invitation>();
  invitation: invitation;
  constructor(private invitationServ: DataService, private fb: FormBuilder) {
    this.token = undefined;
  }

  ngOnInit(): void {


    this.myForm = new FormGroup({
      idInvitation: new FormControl(),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      state: new FormControl()

    })




  }


  add() {
    this.invitationServ.addInvitation(this.myForm.value).subscribe();
    this.aded.emit(this.myForm.value);
    this.myForm.reset();
    window.location.reload();
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
}

