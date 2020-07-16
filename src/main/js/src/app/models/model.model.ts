export class Model {
    public id?: number;
    public modelName?: string;
    public year?: number;

    constructor(modelId: number, modelName: string, modelYear: number){
        this.id = modelId;
        this.modelName = modelName;
        this.year = modelYear;
    }
}