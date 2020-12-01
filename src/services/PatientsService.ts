import { Patient } from "../model/Patient";
import { Firestore } from "../firebase/firebase.util";

class PatientsService {

    private storage = Firestore.collection('/patients');
    private patients: Patient[] = [];

    async getAll(): Promise<Patient[]> {
        const docData = await this.storage.get();
        return this.patients = docData.docs.map((item) => {
            return { ...item.data(), ...{ id: item.id } };
        });
    }

    async add(patient: Patient): Promise<Patient[]> {
        const docData = await this.storage.add(patient);
        this.patients.push({...patient, ...{id: docData.id}});
        return this.patients;
    }

    async remove(id: string): Promise<Patient[]> {
        await this.storage.doc(id).delete();
        const index = this.patients.findIndex(patient => patient.id === id);
        if (index > -1) {
            this.patients.splice(index, 1);
        }
        return this.patients;
    }

    get (id: string): Patient {
        return <Patient>this.patients.find(patient => patient.id === id);
    }
}

export default new PatientsService();