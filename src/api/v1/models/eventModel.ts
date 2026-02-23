export interface Event {
  name: string;
  date: Date;
  capacity: number;
  registrationCount?: number;
  status?: string;
  category?: string;
}