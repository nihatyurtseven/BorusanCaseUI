import { Product } from "./product"

export class Order{
    id!: string;
    statusId!:number;
    customerOrderId!:string;
    outputAddress!:string;
    arrivalAddress!:string;
    quantity!:number;
    quantityType!:number;
    weight!:number;
    weightType!:number;
    productId!:string;
    note!:string;
    product!:Product;
}