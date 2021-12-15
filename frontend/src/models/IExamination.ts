import { PatientInterface } from "./IPatient";

export interface ExaminationInterface{

	ID:	number,

    TreatmentTime: Date,

	Treatment: string,

	Treatment_cost: number,

	Medicine_cost: number,

	PatientID:  number,

	DoctorId:   number,

	Clinic:     number,

	Disease:    number,

	Medicine:   number,

}