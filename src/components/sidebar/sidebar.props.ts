import { BlogsType } from "../interface/blogs.interface";
import { CategoryType } from "../interface/category.interface";

export interface SidebarProps {
    latestBlogs : BlogsType[],
    categories : CategoryType[],
}