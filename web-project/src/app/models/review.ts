export class Review{
    _id:any;
    Id: string;
    UserId: string;
    UserName: string;
    Like:number;
    Date:string;
    Image:string;
    Time: string;
    Content: string;
    thumbPath: string;
    constructor(){
        this._id=null;
        this.Id="";
        this.UserId="";
        this.Like=0;
        this.Date='2022-11-02';
        this.Image="";
        this.UserName="";
        this.Time="";
        this.Content="";
        this.thumbPath=""
    }

}
