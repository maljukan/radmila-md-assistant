import { firestore } from 'firebase';

export interface Patient {
  id?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: firestore.Timestamp;
  email?: string;
  phone?: string;
  city?: string;
  address?: string;
}
