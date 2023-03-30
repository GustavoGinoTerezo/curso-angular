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

  openDialog(nome: string): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {nome: nome}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

