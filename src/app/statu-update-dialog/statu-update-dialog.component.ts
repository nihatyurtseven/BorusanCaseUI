import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderStatusEnum } from '../enums/order-status';
import { Order } from '../models/order';
import { OrderStatuDto } from '../models/orderStatuDto';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-statu-update-dialog',
  templateUrl: './statu-update-dialog.component.html',
  styleUrls: ['./statu-update-dialog.component.css']
})
export class StatuUpdateDialogComponent implements OnInit {

  public orderStatus = Object.keys(OrderStatusEnum).map(key => OrderStatusEnum[Number(key)]).filter(value => typeof value === 'string') as string[];
  selectedStatusId!: number;
  selectedStatusName!: string;
  constructor(public dialogRef: MatDialogRef<StatuUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Order,
    private orderService: OrderService) {
    this.selectedStatusId = this.data.statusId;
    this.selectedStatusName = this.orderStatus[this.selectedStatusId];
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(){
    var orderStatuDto = new OrderStatuDto();
    orderStatuDto.customerOrderId = this.data.customerOrderId;
    orderStatuDto.statusId = this.orderStatus.indexOf(this.selectedStatusName);
    orderStatuDto.changeDate = new Date();
    this.orderService.updateOrderStatu(orderStatuDto).subscribe(result=>{
      this.dialogRef.close(result);
    });
    
  }

}
