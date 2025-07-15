export default class Room{
    // Abstração da sala
    public readonly id : number;
    private nameRoom : string;
    private capacity : number;

    // Abstração de usuarios na sala
    private presentUsers? : number;

    public constructor (
        id : number ,
        nameRoom : string ,
        capacity : number,
        presentUsers:number
    );

    public constructor (
        id : number ,
        nameRoom : string ,
        capacity : number,
        presentUsers? :number
        ){
        this.id = id;
        this.nameRoom = nameRoom;
        this.capacity = capacity;
        this.presentUsers = presentUsers;
    }

    // Getters
    public getid(): number {
        return this.id;
    }
    public getNameRoom(): string {
        return this.nameRoom;
    }
    public getCapacity(): number {
        return this.capacity;
    }

    // Setters
    public setNameRoom(nameRoom: string): void {
        this.nameRoom = nameRoom;
    }
    public setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
}