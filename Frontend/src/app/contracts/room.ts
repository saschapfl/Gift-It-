import { Idea } from './idea';
import { Owner } from './owner';
import { User } from './user';

export class Room {
    id: number;
    name: string;
    timemarks: Date[];
    description: string;
    owner: Owner;
    ideas: Idea[];
    users: User[];
  }