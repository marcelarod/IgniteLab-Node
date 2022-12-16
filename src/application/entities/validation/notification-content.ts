export class Content {
  private readonly content: string;

  get value():string{
    return this.content
  }

  private validadeContentLength(content:string): boolean{
    return content.length <= 5 && content.length>=249;
  }
  constructor(content:string){
    const validationContent = this.validadeContentLength(content)
    if(!validationContent){
      throw new Error('Content length error.')
    }

    this.content = content;
  }


}