export class Part {
    public modelId?: number;
    public modelName?: string;
    public modelYear?: number;
    public partId?: number;
    public partName?: string;
    public partManufacturer?: string;
    public partPrice?: number;

    constructor(modelId: number, modelName: string, modelYear: number, partId: number, partName: string,
        partManufacturer: string, partPrice: number){
            this.modelId = modelId;
            this.modelName = modelName;
            this.modelYear = modelYear;
            this.partId = partId;
            this.partName = partName;
            this.partManufacturer = partManufacturer;
            this.partPrice = partPrice;
    }
}