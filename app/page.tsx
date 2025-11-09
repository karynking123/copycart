import Pricing from "../components/Pricing";
import TikTokHook from "../components/TikTokHook";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>CopyCart</h1>
      <p>Your AI E-commerce Copy & TikTok Hook Generator</p>

      <Pricing />

      <hr style={{ margin: "2rem 0" }} />

      <TikTokHook />
    </main>
  );
}