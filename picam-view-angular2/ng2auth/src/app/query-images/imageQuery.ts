export class ImageQuery {
    constructor(
    public numberOfImages: number,
    public page: number,
    public allImages: boolean,
    public anyDate:boolean,
    public date: Date,
    ) {}
  }
  