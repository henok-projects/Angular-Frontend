import { Injectable } from '@angular/core';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/leaders';
import { PROMOTIONS } from 'src/app/shared/promotions';

@Injectable({
  providedIn: 'root',
})
export class LeaderService {
  constructor() {}

  getLeaders(): Promise<Leader[]> {
    return new Promise((resolve) => {
      //Simulate server latency with 2 seconds
      setTimeout(() => resolve(LEADERS), 2000);
    });
  }
  getLeader(id: string): Promise<Leader> {
    return new Promise((resolve) => {
      //Simulate server latency with 2 seconds
      setTimeout(
        () => resolve(LEADERS.filter((lead) => lead.id === id)[0]),
        2000
      );
    });
  }
  getFeaturedLeader(): Promise<Leader> {
    return new Promise((resolve) => {
      //Simulate server latency with 2 seconds
      setTimeout(
        () => resolve(LEADERS.filter((leader) => leader.featured)[0]),
        2000
      );
    });
  }
}
