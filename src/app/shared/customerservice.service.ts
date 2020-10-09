import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Customer} from "./customer"
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerListRef: AngularFireList<any>;
  customerRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createCustomer(apt: Customer) {
    return this.customerListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Get Single
  getCustomer(id: string) {
    this.customerRef = this.db.object('/customer/' + id);
    return this.customerRef;
  }

  // Get List
  getCsutomerList() {
    this.customerListRef = this.db.list('/customer');
    return this.customerListRef;
  }

  // Update
  updateBooking(id, apt:Customer) {
    return this.customerRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }
  // Delete
  deleteBooking(id: string) {
    this.customerRef = this.db.object('/customer/' + id);
    this.customerRef.remove();
  }
}
