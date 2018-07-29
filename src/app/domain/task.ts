export class Task{
    constructor(
        
        public title: String = '',
        public content: String = '',
        public done: Boolean = false,
        public posted: Date = new Date()
    ){}
}