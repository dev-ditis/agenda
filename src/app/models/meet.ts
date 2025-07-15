export default class Meet {
    public readonly id: number ;
    private title: string ;
    private meetDate: Date ;
    private startTime: Date ;
    private endTime: Date ;
    private roomId : string ;
    
    public constructor (
        id : number ,
        title : string , 
        meetDate : Date , 
        startTime : Date , 
        endTime : Date ,
        roomId :string ,
        ){
        this.id = id ;
        this.title = title;
        this.meetDate = meetDate ;
        this.startTime = startTime;
        this.endTime = endTime;
        this.roomId = roomId;
    }


    // Getters
    public getId(): number {
        return this.id;
    }
    public getTitle(): string {
        return this.title;
    }
    public getMeetDate(): Date {
        return this.meetDate;
    }
    public getStartTime(): Date {
        return this.startTime;
    }
    public getEndTime(): Date {
        return this.endTime;
    }
    public getRoomId():string{
        return this.roomId;
    }


    // Setters
    public setTitle(title: string): void {
        this.title = title;
    }
    public setMeetDate(date: Date): void {
        this.meetDate = date;
    }
    public setStartTime(startTime: Date): void {
        this.startTime = startTime;
    }
    public setEndTime(endTime: Date): void {
        this.endTime = endTime;
    }
}