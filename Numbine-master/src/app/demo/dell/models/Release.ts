import { Product } from "./Product";
export class Release
{
    public constructor(public id: number, public releaseName: string, public status:boolean,public version:string, 
        public releaseDate:string)
    {

    }   
}