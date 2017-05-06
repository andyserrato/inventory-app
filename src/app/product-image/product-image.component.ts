import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { Product } from "../product.model";
@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssCLass= 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}
