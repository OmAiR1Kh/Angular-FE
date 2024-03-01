import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-buttons',
  styleUrls: ['./table-buttons.component.css'],
  template: `
    <div class="table-buttons" style="height: 100%;">
      <i class="fa-solid fa-pen-to-square" (click)="onEditClick()"></i>
      <i class="fa-solid fa-compact-disc" (click)="onAuditClick()"></i>
      <i class="fa-solid fa-trash" (click)="onDeleteClick()"></i>
    </div>
  `,
})
export class TableButtonsComponent {
  params: any;
  agInit(params: any): void {
    this.params = params;
  }
  @Output() editClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();
  @Output() auditClick: EventEmitter<any> = new EventEmitter();

  onEditClick() {
    this.params.parentComponent.showEdit(this.params);
    this.editClick.emit(this.params);
  }

  onDeleteClick() {
    this.params.parentComponent.deleteClicked(this.params);
    this.deleteClick.emit(this.params);
  }

  onAuditClick() {
    this.params.parentComponent.audit(this.params);
    this.auditClick.emit(this.params);
  }
}
