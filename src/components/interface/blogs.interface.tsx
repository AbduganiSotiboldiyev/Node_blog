export interface BlogsType {
    exert : string;
    id : string;
    slug: string;
    title: string
    createdAt : string
    image : {
        url:string
    }
    author : {
        name:string;    
    avatar : {
        url:string;
    }
    }
    category: {
        label:string;
        slug:string;
    }
    description :{
        text:string;
    }
}