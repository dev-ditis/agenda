import Room from "./room";

export default class organization {
    private id!: number;
    private name!: string;
    private rooms: Room[];

    public constructor (id: number, name: string, room: Room){
        this.id = id;
        this.name = name;
        this.rooms = [room];
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
    
    public getRoom() {
        return this.rooms;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public addRoom(room: Room): void{
        let isExist: boolean = false;
        for(let i = 0; i < this.rooms.length; i++){
            if(this.rooms[i].getId() == room.getId()){
                isExist = true;
                break;
            }
        }

        if(!isExist)
            this.rooms.push(room);
    }

    public removeRoom(room: Room): void{
        let isExist: boolean = false;
        let index: number = 0;
        
        for(let i = 0; i < this.rooms.length; i++){
            if(this.rooms[i].getId() == room.getId()){
                isExist = true;
                index = i;
                break;
            }
        }

        if(isExist)
            this.rooms.splice(index, 1);
    }

}