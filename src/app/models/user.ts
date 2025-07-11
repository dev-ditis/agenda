import Organization from "./organization";

export default class User {
    private name!: string;
    private email!: string;
    private password!: string;
    private organizations: Organization[];

    public constructor(name: string, email: string, password: string, organization: Organization){
        this.name = name;
        this.email = email;
        this.password = password;
        this.organizations = [organization];
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getOrganizations(): Organization[] {
        return this.organizations;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public addOrganization(org: Organization): void{
        let isExist: boolean = false;
        for(let i = 0; i < this.organizations.length; i++){
            if(this.organizations[i].getId() == org.getId()){
                isExist = true;
                break;
            }
        }

        if(!isExist)
            this.organizations.push(org);
    }

    public removeOrganization(org: Organization): void{
        let isExist: boolean = false;
        let index: number = 0;
        
        for(let i = 0; i < this.organizations.length; i++){
            if(this.organizations[i].getId() == org.getId()){
                isExist = true;
                index = i;
                break;
            }
        }

        if(isExist)
            this.organizations.splice(index, 1);
    }
}