import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private firestore: AngularFirestore) { }

  BaseDeDatos(empleado: any): Promise<any> {
    return this.firestore.collection('empleados').add(empleado);
  }
}
