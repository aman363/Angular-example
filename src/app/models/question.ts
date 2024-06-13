export class Question{
    id:number
    qText:string
    qType:string
    answer:string
    options:string[]
    constructor(id:number,qText:string,qType:string,answer:string,options:string[]){
        this.id=id
        this.qText=qText
        this.qType=qType
        this.answer=answer
        this.options=options
    }
}