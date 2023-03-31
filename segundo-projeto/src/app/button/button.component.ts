import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {

  nome: string;

  constructor(
    public dialog: MatDialog
  ){ }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {nome: this.nome}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.nome = result.nome;
      console.log("enviado ------ ", this.nome);
      });
  }
}

