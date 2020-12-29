import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import blog from "./blog";
import film from "./film";
import povidky from "./povidky";
import knihy from "./knihy";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([blog, film, povidky, knihy, blockContent]),
});
