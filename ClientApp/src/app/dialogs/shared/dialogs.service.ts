// Angular Core
import { MatDialogRef, MatDialog, MatDialogConfig, transformMenu } from "@angular/material";
import { Injectable, ViewContainerRef } from "@angular/core";
// rxjs
import { Observable } from "rxjs/Rx";
// module
import { retry } from "rxjs/operators";
import { concat } from "rxjs/operator/concat";
// components
import { ConfirmDialog } from "../confirm-dialog/confirm-dialog.component";
import { ContextDialog } from "../context-dialog/context-dialog.component";
import { ErrorDialog } from "../error-dialog/error-dialog.component";

@Injectable()
export class DialogsService {
  // width and height > width and height in scss master-dialog
  width: string = "950px";
  height: string = "500px";

  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MatDialogRef<ConfirmDialog>;
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ConfirmDialog, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public context(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MatDialogRef<ContextDialog>;
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ContextDialog, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public error(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

    let dialogRef: MatDialogRef<ErrorDialog>;
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = viewContainerRef;

    dialogRef = this.dialog.open(ErrorDialog, config);

    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
