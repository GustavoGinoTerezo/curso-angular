import { ModalClienteComponent } from './../modal-cliente/modal-cliente.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {

  name?: string = "jose";
  animal?: string = "gato";

  constructor(public mensagem: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.mensagem.open(ModalClienteComponent, {
      data: {name: this.name, animal: this.animal},
      height: '30%',
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result.animal;
      console.log('The dialog was closed');
      console.log("enviado: --------- ", this.animal, this.name);
    });
  }
}
