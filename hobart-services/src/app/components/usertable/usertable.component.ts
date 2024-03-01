import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent implements OnInit {
  tab: string = 'user';
  showAdd: boolean = false;
  hideAdd: boolean = true;

  hideAddF() {
    this.hideAdd = true;
    this.showAdd = false;
  }

  handleAdd() {
    this.showAdd = true;
    this.hideAdd = false;
    console.log(this.showAdd);
  }

  setTab(tab: string) {
    this.tab = tab;
    console.log(this.tab);
  }

  innerTab: string = 'active';
  activeUsers: any = [];
  inactiveUsers: any = [];
  user: any[] = [];

  ngOnInit(): void {
    this.user = [
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: true,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
      {
        isActive: false,
        id: 1,
        lastname: 'lastname',
        firstname: 'fname',
        territory: 'tr',
        desk: 'desk',
        profile: 'prf',
        uid: 'uid',
        status: 'single',
        trigram: 'no idea',
        location: 'hunik',
      },
    ];

    this.filterUsers();
  }

  private filterUsers() {
    let that = this;
    if (this.innerTab === 'active') {
      this.activeUsers = that.user.filter((u) => u.isActive);
      this.inactiveUsers = [];
    } else if (this.innerTab === 'inactive') {
      this.activeUsers = [];
      this.inactiveUsers = that.user.filter((u) => !u.isActive);
    } else {
      // Handle other cases or set a default behavior
      this.activeUsers = that.user.filter((u) => u.isActive);
      this.inactiveUsers = that.user.filter((u) => !u.isActive);
    }

    console.log('active', this.activeUsers);
    console.log('inactive', this.inactiveUsers);
  }

  setInnerTab(innerTab: string) {
    console.log(this);

    this.innerTab = innerTab;
    console.log('innerTab::', this.innerTab);
    this.filterUsers();
    console.log(this.user);
  }
}