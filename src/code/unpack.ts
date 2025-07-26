import { Field } from "./field";

export class Unpack extends Field {
    constructor (
        name: string, 
        field:string, 
        public readonly bigEndian:boolean
    ){
        const endian_str = bigEndian ? 'be': 'le';
        super('match', `unpack_${endian_str}_${field}`, name, field);
    }
}

