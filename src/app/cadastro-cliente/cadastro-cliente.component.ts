import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  erro='';
  form:FormGroup;
  public name = this.fb.control('', [ Validators.required]);
  public email = this.fb.control('', [ Validators.required,Validators.email ]);
  public celular = this.fb.control('',[Validators.required]);
  public telefoneResidencial = this.fb.control('',[Validators.required,Validators.pattern('[0-9]{10}')]);
  public telefoneComercial = this.fb.control('',[Validators.required]);
  public rua = this.fb.control('', [ Validators.required]);
  public numero = this.fb.control('', [ Validators.required]);
  public bairro = this.fb.control('', [ Validators.required]);
  public cep = this.fb.control('', [ Validators.required]);
  public cidade = this.fb.control('', [ Validators.required]);
  public estado = this.fb.control('', [ Validators.required]);
  public pais = this.fb.control('', [ Validators.required]);
  public documento= this.fb.control('', [ Validators.required, Validators.pattern('[0-9]{11,14}')]);
  public tipoPessoa = this.fb.control('', [ Validators.required]);
  public dataNascimento = this.fb.control('', [ Validators.required]);


  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: this.name,
      
      email: this.email,
      celular:this.celular,
      telefoneResidencial:this.telefoneResidencial,
      telefoneComercial:this.telefoneComercial,

      rua:this.rua,
      numero:this.numero,
      bairro:this.bairro,
      cep:this.cep,
      cidade:this.cidade,
      estado:this.estado,
      pais:this.pais,

      tipoPessoa:this.tipoPessoa,
      documento:this.documento,
      dataNascimento:this.dataNascimento
    })
  }
  ngOnInit(){

  }

}
