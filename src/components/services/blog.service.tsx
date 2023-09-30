import {request,gql} from "graphql-request"
import { BlogsType } from "../interface/blogs.interface";
import { CategoryType } from "../interface/category.interface";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const BlogService = {
    async getAllBlogs() {
        const query = gql`
            query GetBlogs {
                    blogs {
                        exert
                        id
                        slug
                        title
                        createdAt
                        image {
                            url
                        }
                        author {
                        name
                        avatar {
                            url
                        }
                        }
                        category {
                            label
                            slug
                        }
                    }
                }

        ` ;
        const result = await request<{blogs : BlogsType[]}>(graphqlAPI, query)
        return result.blogs  
    },
    async getLatestBlogs() {
        const query = gql`
            query GetLatestBlogs {
                    blogs(last : 2) {
                        id
                        slug
                        title
                        createdAt
                        image {
                            url
                        }
                        author {
                        name
                        avatar {
                            url
                        }
                        }
                    }
                }
        `;
        const result = await request<{blogs : BlogsType[]}>(graphqlAPI, query)
        return result.blogs 
    },
    async getCategories() {
        const query = gql`
            query GetCategories {
                categories {
                        label
                        slug
                    }
            }
        `;
        const result = await request<{categories : CategoryType[]}>(graphqlAPI, query)
        return result.categories
    }
}