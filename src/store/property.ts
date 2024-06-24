import { writable } from "svelte/store";
import type { Feature } from "../service/list_property/type";

let property_count = writable(0);
let property_list = writable<Feature[]>([]);
let property_like_list = writable<Feature[]>([]);
let property_clicked = writable<string>("");
let property_liked = writable<Number[]>([]);

export {
  property_count,
  property_list,
  property_clicked,
  property_like_list,
  property_liked,
};
