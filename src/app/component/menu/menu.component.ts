import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/service/dish/dish.service';
import { Dish } from '../../shared/dish';
import { DISHES } from '../../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  dishes!: Dish[];

  selectedDish!: Dish;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
