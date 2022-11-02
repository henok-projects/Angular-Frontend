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
    return Promise.resolve(LEADERS);
  }
  getLeader(id: string): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((lead) => lead.id === id)[0]);
  }
  getFeaturedLeader(): Promise<Leader> {
    return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
