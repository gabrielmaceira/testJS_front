import React from "react";
import { ItemList } from "./ItemList";
import list from "../constants/list.json";

export const ItemListContainer = () => {
  return <ItemList items={list} />
};
