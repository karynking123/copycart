"use client";
import { useState } from "react";

export default function TikTokHook() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  async function generateHook() {
    if (!input) return;

    setResult("Generating...");

    try {
      const response = await fetch("/api/tiktok-hook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setResult(data.hook || "No hook generated.");
    } catch {
      setResult("Error generating hook.");
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>TikTok Hook Generator</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a product or topic..."
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      />
      <button onClick={generateHook} style={{ padding: "0.5rem 1rem" }}>
        Generate Hook
      </button>

      {result && (
        <p style={{ marginTop: "1rem", whiteSpace: "pre-wrap" }}>{result}</p>
      )}
    </div>
  );
}