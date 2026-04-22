"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply || "Sorry, something went wrong." }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I couldn't connect. Try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {open && (
        <div style={{
          position: "fixed", bottom: 90, right: 24, width: 340,
          maxHeight: 520, borderRadius: 20,
          background: "#0f0f1a",
          border: "1px solid rgba(16,185,129,0.25)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.08)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          zIndex: 9999, fontFamily: "Inter, sans-serif",
        }}>
          {/* Header */}
          <div style={{
            padding: "13px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 12px rgba(16,185,129,0.4)",
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C4.134 1 1 3.686 1 7c0 1.5.6 2.87 1.6 3.94L2 14l3.26-1.02C6.1 13.3 7.02 13.5 8 13.5c3.866 0 7-2.686 7-6s-3.134-6-7-6z" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ color: "#f0f0f5", fontWeight: 700, fontSize: 13, lineHeight: 1 }}>TagMint AI</div>
                <div style={{ color: "#10b981", fontSize: 11, marginTop: 2 }}>● Ask me anything</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              background: "none", border: "none", color: "#6060a0", cursor: "pointer", fontSize: 20, lineHeight: 1,
            }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "14px 14px 8px", display: "flex", flexDirection: "column", gap: 8 }}>
            {messages.length === 0 && (
              <div style={{ textAlign: "center", padding: "24px 10px", color: "#4040a0", fontSize: 13, lineHeight: 1.6 }}>
                👋 Hi! Ask me anything about TagMint, Etsy SEO, or eBay optimization.
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%",
                  padding: "9px 13px",
                  borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #10b981, #059669)"
                    : "rgba(255,255,255,0.05)",
                  color: msg.role === "user" ? "#fff" : "#c0c0d8",
                  fontSize: 13, lineHeight: 1.55,
                  border: msg.role === "assistant" ? "1px solid rgba(255,255,255,0.07)" : "none",
                  whiteSpace: "pre-wrap",
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "9px 16px", borderRadius: "14px 14px 14px 4px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "#10b981", fontSize: 18, letterSpacing: 4,
                }}>
                  ···
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "10px 12px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex", gap: 8, alignItems: "center",
            flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about TagMint or Etsy SEO..."
              style={{
                flex: 1, background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "9px 12px",
                color: "#f0f0f5", fontSize: 13, outline: "none",
                fontFamily: "Inter, sans-serif",
              }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                border: "none", borderRadius: 10,
                width: 36, height: 36, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: !input.trim() || loading ? 0.4 : 1,
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button onClick={() => setOpen((o) => !o)} style={{
        position: "fixed", bottom: 24, right: 24,
        width: 54, height: 54, borderRadius: "50%",
        background: "linear-gradient(135deg, #10b981, #059669)",
        border: "none", cursor: "pointer",
        boxShadow: "0 4px 20px rgba(16,185,129,0.45)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 9999, transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(16,185,129,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(16,185,129,0.45)";
      }}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C6.582 2 3 5.134 3 9c0 1.8.72 3.44 1.92 4.73L4 18l4.5-1.4C9.6 16.85 10.28 17 11 17c4.418 0 8-3.134 8-7s-3.582-7-8-7z" fill="white"/>
            <circle cx="8" cy="9" r="1" fill="rgba(5,150,105,0.8)"/>
            <circle cx="11" cy="9" r="1" fill="rgba(5,150,105,0.8)"/>
            <circle cx="14" cy="9" r="1" fill="rgba(5,150,105,0.8)"/>
          </svg>
        )}
      </button>
    </>
  );
}
