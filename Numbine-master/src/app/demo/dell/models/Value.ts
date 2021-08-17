export class Value
{
    public constructor(public id: number, public name: string) {}   

    public toString(): string {
        return this.name ;
    }
}