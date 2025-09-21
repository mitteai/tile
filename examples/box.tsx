import React from "react";
import { View, HStack, style } from "../lib";

const Container = HStack().padding(20).gap(20).element();

const Box = View()
  .size(200, 200)
  .gradient("45deg", ["#ff6b6b", "#4ecdc4"])
  .round(20)
  .shadow()
  .center()
  .transition(300)
  .onHover(
    View().scale(1.1).shadow({ y: 8, blur: 20, color: "rgba(0,0,0,0.3)" }),
  )
  // background variants
  .variant(
    "b",
    View().gradient("to-bottom", [
      { color: "#ff9a9e", stop: "0%" },
      { color: "#fad0c4", stop: "50%" },
      { color: "#ff6b6b", stop: "100%" },
    ]),
  )
  .variant(
    "c",
    View().gradient("radial", ["#667eea", "pink"], { center: "10px 10px" }),
  )
  .variant(
    "d",
    View().gradient("conic", ["#ff9a9e", "#fecfef", "#fecfef"], {
      from: "45deg",
    }),
  )
  .element();

const BoxExample = () => {
  return (
    <Container>
      <Box></Box>
      <Box b />
      <Box c />
      <Box d />
    </Container>
  );
};

export default BoxExample;
