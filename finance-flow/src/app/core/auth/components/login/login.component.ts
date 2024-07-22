import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}


  // #region ==========> PROPERTIES <==========

  // #region PRIVATE
  // [...]
  // #endregion PRIVATE

  // #region PUBLIC
  public isRecentlyLogged: boolean = false;
  // #endregion PUBLIC

  // #endregion ==========> PROPERTIES <==========


  // #region ==========> FORM BUILDER <==========
  public loginForm: FormGroup = new FormGroup<{
    email: FormControl<string|null>,
    senha: FormControl<string|null>,
    rememberMe: FormControl<boolean|null>
  }>({
    email: new FormControl(""),
    senha: new FormControl(""),
    rememberMe: new FormControl(true)
  });
  // #endregion ==========> FORM BUILDER <==========


  // #region ==========> SERVICE METHODS <==========

  // #region PREPARATION
  // [...]
  // #endregion PREPARATION

  // #region GET
  // [...]
  // #endregion GET

  // #region POST
  // [...]
  // #endregion POST

  // #region DELETE
  // [...]
  // #endregion DELETE

  // #endregion ==========> SERVICE METHODS <==========


  // #region ==========> UTILITIES <==========
  // [...]
  // #endregion ==========> UTILITIES <==========


  // #region ==========> MODALS <==========
  // [...]
  // #endregion ==========> MODALS <==========

}
