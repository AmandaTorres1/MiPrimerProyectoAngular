import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-club-fans',
  imports: [ReactiveFormsModule],
  templateUrl: './club-fans.html',
  styleUrl: './club-fans.css'
})
export class ClubFans {
  private formBuilder = inject(FormBuilder);

  registroForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: ['']
    }),
    edad: [''],
    pais: ['Argentina'],
    sexo: [''],
    datoAdicional: [''],
    pasatiempos: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get pasatiempos(): FormArray {
    return this.registroForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.formBuilder.control(''));
  }

  cargarDireccionPrueba(): void {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Corrientes 1234',
        ciudad: 'Córdoba'
      }
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      console.log('Datos del formulario:', this.registroForm.value);
    } else {
      console.log('Faltan completar campos obligatorios');
      this.registroForm.markAllAsTouched();
    }
  }
}
