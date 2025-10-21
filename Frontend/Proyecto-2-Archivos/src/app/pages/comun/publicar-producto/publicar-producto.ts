import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-publicar-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './publicar-producto.html',
  styleUrl: './publicar-producto.css'
})
export class PublicarProducto {
  form: FormGroup;
  imageFile?: File;
  userId = 'CURRENT_USER_ID'; // reemplazar por auth
  submitting = false;


  categories = ['tecnologia', 'hogar', 'academico', 'personal', 'decoracion', 'otro'];


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      price: [0, [Validators.required, Validators.min(0.01)]],
      stock: [1, [Validators.required, Validators.min(1)]],
      state: ['nuevo', Validators.required],
      category: ['tecnologia', Validators.required]
    });

  }
  ngOnInit(): void { }

  onFileChange(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.imageFile = input.files[0];
    }

  }
  submit() {

  }
}
