import { Attributes } from './attributes';

export class Bookings {
    public type: string;
    public id: number;
    public attributes: Attributes;

    public constructor(init?: Partial<Bookings>) {
        if (init) {
          Object.assign(this, init);
        }
      }
}