import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';

interface GridReadyEvent {
  api: GridApi;
  columnApi: ColumnApi
}

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css'],
})
export class GridComponentComponent {
  @Input() rowData: any[] = [];
  @Input() colDefs: ColDef[] = [];
  @Input() gridOptions: any = {};
  @Output() gridReady: EventEmitter<GridReadyEvent> = new EventEmitter();

  onGridReady(params: any) {
    this.gridReady.emit(params);
  }
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
}
