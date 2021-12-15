import { CashierInterface } from "./ICashier";
import { ExaminationInterface } from "./IExamination";
import { PatientInterface } from "./IPatient";
import { PatientRightInterface } from "./IPatientRight";

export interface BillInterface{
    ID: number,
    PatientID: number,
    ExaminationID: number,
    Examination: ExaminationInterface,
    PatientRightID: number,
    PatientRight:   PatientRightInterface,
    BillTime:   Date,
    Total:  number,
    CashierID: number,
    Cashier: CashierInterface,

}