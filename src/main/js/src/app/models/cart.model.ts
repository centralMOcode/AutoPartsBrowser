export class Cart {
    public id?: number;
    public modelName?: string;
    public partName?: string;
    public partManufacturer?: string;
    public partPrice?: number;

    constructor(id: number, modelName: string, partName: string, partManufacturer: string, price: number){
        this.id = id;
        this.modelName = modelName;
        this.partName = partName;
        this.partManufacturer = partManufacturer;
        this.partPrice = price;
    }
}