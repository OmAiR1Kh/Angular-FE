import { Component, OnInit } from '@angular/core';
import { users } from '../../user';
import { ColDef, GridApi, GridOptions, ColumnApi } from 'ag-grid-community';
import { TableButtonsComponent } from '../table-buttons/table-buttons.component';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent implements OnInit {
  tab: string = 'user';
  showAdd: boolean = false;
  hideAdd: boolean = true;
  gridOptions: GridOptions = {
    tooltipMouseTrack: true,
    suppressContextMenu: true,
    overlayNoRowsTemplate: 'No result found for your search',
    paginationAutoPageSize: true,
    pagination: true,
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent', align: 'center' },
      ],
    },
  };
  headers: string[] = [''];
  gridColumnApi!: ColumnApi;
  colDefs: ColDef[] = [
    {
      headerName: '#',
      field: 'id',
      width: 59,
    },
    { field: 'firstname', headerName: 'First Name' },
    { field: 'lastname', headerName: 'Last Name' },
    { field: 'territory', headerName: 'Territory' },
    { field: 'desk', headerName: 'Desk' },
    { field: 'profile', headerName: 'Profile' },
    { field: 'uid', headerName: 'UID' },
    { field: 'status', headerName: 'Status' },
    { field: 'trigram', headerName: 'Trigram' },
    { field: 'location', headerName: 'Location' },
    {
      field: 'actions',
      headerName: 'Actions',
      cellRendererFramework: TableButtonsComponent,
      cellRendererParams: {
        parentComponent: this,
        editClick: (params: any) => this.showEdit(params),
        deleteClick: (params: any) => this.deleteClicked(params),
        auditClick: (params: any) => this.audit(params),
      },
    },
  ];

  showEdit(params: any) {
    console.log('edit', params.data.id);
  }

  audit(params: any) {
    console.log('audit', params.data.id);
  }

  deleteClicked(params: any) {
    console.log('delete', params.data.id);
  }

  onHeadersSelected(selectedHeaders: string[]) {
    this.headers = selectedHeaders;
  }

  rearrangedUsers: any = [];

  downloadShown() {}

  hideAddF() {
    this.hideAdd = true;
    this.showAdd = false;
  }

  handleAdd() {
    this.showAdd = true;
    this.hideAdd = false;
    console.log(this.showAdd);
  }

  clickData() {
    console.log('clicked');
    document?.getElementById('hide-show')?.click();
  }

  setTab(tab: string) {
    this.tab = tab;
  }

  private agGrid!: GridApi;

  onGridReady(params: { api: GridApi; columnApi: ColumnApi }) {
    this.gridColumnApi = params.columnApi;
    this.agGrid = params.api;
  }

  exportToCsv() {
    this.agGrid.setRowData(users);
    this.agGrid.exportDataAsCsv({
      fileName: 'hobart-web-users',
      columnKeys: this.gridColumnApi
        .getAllColumns()
        ?.filter((col) => col.getColDef().field !== 'actions')
        .map((col) => {
          return col.getColId();
        }),
    });
    this.innerTab == 'active'
      ? this.agGrid.setRowData(this.activeUsers)
      : this.innerTab == 'inactive'
      ? this.agGrid.setRowData(this.inactiveUsers)
      : this.agGrid.setRowData(users);
  }

  exportVisibleData() {
    this.agGrid.exportDataAsCsv({
      fileName: 'hobart-services-visible-data',
      onlySelected: false,
      columnKeys: this.gridColumnApi
        .getAllDisplayedColumns()
        .filter((col) => col.getColDef().field !== 'actions')
        .map((col: any) => {
          return col.getColId();
        }),
    });
  }

  innerTab: string = 'active';
  activeUsers: any = [];
  inactiveUsers: any = [];

  private parseCriteria(filter: any): any {
    const criteria = {
      filterType: filter.fieldType,
      field: filter.field,
      fullName: filter.fullName,
      operator: filter.operator,
    };
  }
  initialFilters: Array<any> = [];
  applyFilters(filters: any): void {
    const criterias = filters.map((filter: any) => this.parseCriteria(filter));
  }
  ngOnInit(): void {
    const headerOrder = [
      'lastname',
      'firstname',
      'territory',
      'desk',
      'profile',
      'uid',
      'status',
      'trigram',
      'location',
    ];
    const rearrangeUserData = (users: any[]): any[] => {
      return users.map((user) => {
        const rearrangedUser: any = { isActive: user.isActive, id: user.id };

        headerOrder.forEach((header) => {
          rearrangedUser[header] = user[header];
        });

        return rearrangedUser;
      });
    };
    this.rearrangedUsers = rearrangeUserData(users);

    this.filterUsers();
    this.headers = Object.keys(this.rearrangedUsers[0]);
  }

  private filterUsers() {
    let that = this;
    if (this.innerTab === 'active') {
      this.activeUsers = that.rearrangedUsers.filter(
        (u: any) => u.status == 'active'
      );
      this.inactiveUsers = [];
    } else if (this.innerTab === 'inactive') {
      this.activeUsers = [];
      this.inactiveUsers = that.rearrangedUsers.filter(
        (u: any) => u.status == 'inactive'
      );
    } else {
      // Handle other cases or set a default behavior
      this.activeUsers = that.rearrangedUsers.filter((u: any) => u.isActive);
      this.inactiveUsers = that.rearrangedUsers.filter((u: any) => !u.isActive);
    }
  }

  setInnerTab(innerTab: string) {
    this.innerTab = innerTab;
    console.log('innerTab::', this.innerTab);
    this.filterUsers();
  }
}
