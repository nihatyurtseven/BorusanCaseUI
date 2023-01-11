import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Order } from './models/order';
import { OrderService } from './services/order.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { WeightType } from './enums/weight-type';
import { QuantityType } from './enums/quantity-Type';
import { OrderStatusEnum } from './enums/order-status';
import { MatDialog } from '@angular/material/dialog';
import { StatuUpdateDialogComponent } from './statu-update-dialog/statu-update-dialog.component';
import { OrderResult } from './models/orderResult';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'BorusanCaseUI';
  orders: Order[] = [];
  weightType = WeightType;
  quantityType = QuantityType;
  orderStatus = OrderStatusEnum;


  displayedColumns: string[] = ['customerOrderId', 'outputAddress', 'arrivalAddress','quantity','quantityType','weight','weightType','product','note','statusId'];
  dataSource!: MatTableDataSource<Order>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private orderService: OrderService, public dialog: MatDialog) {
    
  }

  ngOnInit():void{
    this.getOrders();
  }

  getOrders(){
    this.orderService.getOrders().subscribe(result=>{
      this.orders = result;
      console.log(this.orders);
    this.dataSource = new MatTableDataSource(this.orders);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  statuUpdate(order:Order){
    console.log("sttu update",order);

    const dialogRef = this.dialog.open(StatuUpdateDialogComponent, {
      data: order,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      order = result;
      this.getOrders();
    });
  }

}