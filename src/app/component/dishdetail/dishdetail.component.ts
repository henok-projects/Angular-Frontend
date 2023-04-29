import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../../shared/dish';
import { DishService } from 'src/app/service/dish/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
})
export class DishdetailComponent implements OnInit {
  // @Input()
  dish!: Dish;
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id).subscribe((dis) => (this.dish = dis));
  }

  goBack(): void {
    this.location.back();
  }
}
