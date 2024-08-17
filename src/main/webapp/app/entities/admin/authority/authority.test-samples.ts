import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c6122cef-aa73-4203-82bf-2fb5524a84c5',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b2450545-7cea-469f-8d44-f51f7dcdaf06',
};

export const sampleWithFullData: IAuthority = {
  name: '84510cfa-02bd-407d-ad2c-aad62fd13353',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
