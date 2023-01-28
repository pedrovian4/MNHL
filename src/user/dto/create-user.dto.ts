
export class CreateUserDto {
    email:string
    firstName:string 
    lastName:string
    contryNumber:string 
    stateNumber: string
    createdAt: Date  = new Date()
    updatedAt: Date  = new Date()
}
