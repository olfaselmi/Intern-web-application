import { User } from "./user";

export class Bureau{
    constructor(CodePostale: number,NomAgence: string, Adresse: string, PositionGPS: string, typeo:string) {
    this.CodePostale=CodePostale;
this.NomAgence=NomAgence;
     this.Adresse = Adresse;
     this.PositionGPS = PositionGPS;
     this.typeo=typeo;       }
CodePostale:number;
NomAgence:string;
Adresse:string;
PositionGPS:string;
typeo:string;
user:User;

}