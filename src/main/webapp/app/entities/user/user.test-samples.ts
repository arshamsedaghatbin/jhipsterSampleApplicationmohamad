import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 25106,
  login: 'pD3',
};

export const sampleWithPartialData: IUser = {
  id: 30891,
  login: '3TM@t6\\|PiQvQ\\zQ0GzDs',
};

export const sampleWithFullData: IUser = {
  id: 995,
  login: 'L',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
