import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css']
})
export class ModalClienteComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, animal: string},
  ) {
    console.log("recebido", data);
    this.data.animal = "cachorro"
    this.data.name = "antonio"
  }

  onNoClick(): void {
    console.log("modal -------- ", this.data)
    this.dialogRef.close();
  }

}
