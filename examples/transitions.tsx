import React from "react";
import { View, VStack, HStack, Frame } from "../lib";

const Container = VStack().padding(40).gap(30).center().element();

const Section = VStack().gap(20).align({ x: "center" }).element();

const SectionTitle = View()
  .text(24, { weight: "bold" })
  .fg("#333")
  .element();

const DemoGrid = HStack().gap(20).flex({ wrap: "wrap", justify: "center" }).element();

const LegacyBox = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition(300)
  .onHover(View().shadow({ y: 4, blur: 12, color: "rgba(0,0,0,0.15)" }).translate(0, -2))
  .element();

const LegacyBoxWithProps = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition("0.5s", ["opacity", "transform"])
  .onHover(View().opacity(0.9).scale(1.02).shadow({ y: 4, blur: 12, color: "rgba(0,0,0,0.15)" }))
  .element();

const NewApiBox = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition({
    speed: 400,
    ease: "ease-in-out",
    delay: 100,
    props: ["background-color", "transform"]
  })
  .onHover(View().bg("#f8fafc").scale(1.02).shadow({ y: 4, blur: 12, color: "rgba(0,0,0,0.15)" }))
  .element();

const BounceBox = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition({
    speed: 600,
    ease: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    props: ["transform", "box-shadow"]
  })
  .onHover(View().scale(1.05).shadow({ y: 6, blur: 16, color: "rgba(0,0,0,0.2)" }))
  .element();

const StepBox = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition({
    speed: 800,
    ease: "steps(4, end)",
    props: ["opacity", "transform"]
  })
  .onHover(View().opacity(0.9).rotate(2).shadow({ y: 4, blur: 12, color: "rgba(0,0,0,0.15)" }))
  .element();

const LinearBox = View()
  .size(140, 90)
  .bg("white")
  .fg("#374151")
  .round(8)
  .center()
  .text(13, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 3, color: "rgba(0,0,0,0.1)" })
  .transition({
    speed: 2000,
    ease: "linear",
    props: ["background-color", "border-radius"]
  })
  .onHover(View().bg("#f8fafc").round(12).shadow({ y: 4, blur: 12, color: "rgba(0,0,0,0.15)" }))
  .element();

const EaseInBox = View()
  .size(120, 70)
  .bg("white")
  .fg("#374151")
  .round(6)
  .center()
  .text(12, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 500,
    ease: "ease-in",
    props: ["transform"]
  })
  .onHover(View().scale(1.03).shadow({ y: 3, blur: 8, color: "rgba(0,0,0,0.1)" }))
  .element();

const EaseOutBox = View()
  .size(120, 70)
  .bg("white")
  .fg("#374151")
  .round(6)
  .center()
  .text(12, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 500,
    ease: "ease-out",
    props: ["transform"]
  })
  .onHover(View().scale(1.03).shadow({ y: 3, blur: 8, color: "rgba(0,0,0,0.1)" }))
  .element();

const CustomCubicBezierBox = View()
  .size(120, 70)
  .bg("white")
  .fg("#374151")
  .round(6)
  .center()
  .text(12, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 700,
    ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    props: ["transform", "opacity"]
  })
  .onHover(View().scale(1.02).opacity(0.95).translate(0, -2).shadow({ y: 3, blur: 8, color: "rgba(0,0,0,0.1)" }))
  .element();

const StepsBox = View()
  .size(120, 70)
  .bg("white")
  .fg("#374151")
  .round(6)
  .center()
  .text(12, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 1000,
    ease: "steps(6, start)",
    props: ["transform"]
  })
  .onHover(View().scale(1.05).rotate(1).shadow({ y: 3, blur: 8, color: "rgba(0,0,0,0.1)" }))
  .element();

const DelayedBox1 = View()
  .size(100, 60)
  .bg("white")
  .fg("#374151")
  .round(4)
  .center()
  .text(11, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 600,
    ease: "ease-out",
    delay: 0,
    props: ["transform", "box-shadow"]
  })
  .onHover(View().scale(1.05).rotate(2).shadow({ y: 4, blur: 8, color: "rgba(0,0,0,0.15)" }))
  .element();

const DelayedBox2 = View()
  .size(100, 60)
  .bg("white")
  .fg("#374151")
  .round(4)
  .center()
  .text(11, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 600,
    ease: "ease-out",
    delay: 200,
    props: ["transform", "opacity"]
  })
  .onHover(View().scale(1.08).opacity(0.9).translate(0, -3))
  .element();

const DelayedBox3 = View()
  .size(100, 60)
  .bg("white")
  .fg("#374151")
  .round(4)
  .center()
  .text(11, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 600,
    ease: "ease-out",
    delay: 400,
    props: ["transform", "background-color"]
  })
  .onHover(View().scale(1.06).bg("#f8fafc").rotate(-1))
  .element();

const DelayedBox4 = View()
  .size(100, 60)
  .bg("white")
  .fg("#374151")
  .round(4)
  .center()
  .text(11, { weight: "500" })
  .border(1, { color: "#e5e7eb" })
  .shadow({ y: 1, blur: 2, color: "rgba(0,0,0,0.05)" })
  .transition({
    speed: 600,
    ease: "ease-out",
    delay: 600,
    props: ["transform", "border-radius", "box-shadow"]
  })
  .onHover(View().scale(1.04).round(8).shadow({ y: 6, blur: 12, color: "rgba(0,0,0,0.2)" }))
  .element();

const InfoBox = View()
  .text(16, { color: "#666", align: "center" })
  .padding(20)
  .bg("#f8f9fa")
  .round(8)
  .element();

export const TransitionsExample = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Legacy API Examples</SectionTitle>
        <DemoGrid>
          <LegacyBox>Simple 300ms</LegacyBox>
          <LegacyBoxWithProps>0.5s + Props</LegacyBoxWithProps>
        </DemoGrid>
      </Section>

      <Section>
        <SectionTitle>New Enhanced API Examples</SectionTitle>
        <DemoGrid>
          <NewApiBox>Speed + Ease + Delay</NewApiBox>
          <BounceBox>Bounce Effect</BounceBox>
          <StepBox>Step Animation</StepBox>
          <LinearBox>Linear 2s</LinearBox>
        </DemoGrid>
      </Section>

      <Section>
        <SectionTitle>Easing Functions</SectionTitle>
        <DemoGrid>
          <EaseInBox>Ease In</EaseInBox>
          <EaseOutBox>Ease Out</EaseOutBox>
          <CustomCubicBezierBox>Custom Curve</CustomCubicBezierBox>
          <StepsBox>Steps</StepsBox>
        </DemoGrid>
      </Section>

      <Section>
        <SectionTitle>Staggered Delays</SectionTitle>
        <DemoGrid>
          <DelayedBox1>0ms</DelayedBox1>
          <DelayedBox2>200ms</DelayedBox2>
          <DelayedBox3>400ms</DelayedBox3>
          <DelayedBox4>600ms</DelayedBox4>
        </DemoGrid>
      </Section>

      <InfoBox>
        Hover over the boxes to see different transition effects!<br />
        The new API supports speed, ease, delay, and custom properties.
      </InfoBox>
    </Container>
  );
};

export default TransitionsExample;
