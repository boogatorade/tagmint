module.exports = [
"[project]/components/ChatWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatWidget",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const QA = {
    "how-it-works": {
        question: "How does it work?",
        answer: "You submit your listing URLs and current title, tags, and description at checkout. We rewrite everything using SEO research and deliver ready-to-paste results straight to your email — automatically, within 48 hours.",
        followUps: [
            "what-do-i-provide",
            "how-fast",
            "what-do-i-get"
        ]
    },
    "what-do-i-provide": {
        question: "What do I need to provide?",
        answer: "Just your Etsy or eBay shop URL, your listing URLs, and your current title, tags, and description. Paste them into the checkout form — that's it. No calls, no spreadsheets.",
        followUps: [
            "how-fast",
            "what-do-i-get",
            "pricing"
        ]
    },
    "how-fast": {
        question: "How fast is delivery?",
        answer: "Listing Tune-Up and Shop Boost are delivered within 48 hours. Full Shop Overhaul within 5 business days. You'll get an email as soon as your optimized listings are ready.",
        followUps: [
            "what-do-i-get",
            "does-it-work"
        ]
    },
    "what-do-i-get": {
        question: "What do I actually get?",
        answer: "A ready-to-paste document with your new SEO-optimized title, all 13 tags rewritten, and a keyword-rich description. Just copy it into your Etsy or eBay listing editor and publish.",
        followUps: [
            "does-it-work",
            "pricing"
        ]
    },
    "pricing": {
        question: "How much does it cost?",
        answer: "Three plans — Listing Tune-Up ($7) for 1 listing, Shop Boost ($19) for 3 listings + keyword report, and Full Shop Overhaul ($49) for 10 listings + full audit. All one-time payments, no subscriptions.",
        followUps: [
            "which-plan",
            "does-it-work",
            "platforms"
        ]
    },
    "which-plan": {
        question: "Which plan should I choose?",
        answer: "If you're testing the waters, start with the $7 Tune-Up on your best listing. If you're serious about growing, the $19 Shop Boost is the best value — 3 listings plus a full keyword strategy.",
        followUps: [
            "does-it-work",
            "guarantee"
        ]
    },
    "does-it-work": {
        question: "Will it actually work?",
        answer: "Most sellers see 3–5× more views within 2–3 weeks. One example: a candle listing went from 4 views/week to 94 views/week — no ad spend, no photo changes, no price changes. Just better SEO.",
        followUps: [
            "which-plan",
            "platforms"
        ]
    },
    "platforms": {
        question: "Which platforms do you support?",
        answer: "Both Etsy and eBay. Etsy uses a 13-tag system with long-tail keywords. eBay relies on title keywords and item specifics. We know the rules for both and optimize accordingly.",
        followUps: [
            "how-it-works",
            "pricing"
        ]
    }
};
const ROOT_QUESTIONS = [
    "how-it-works",
    "pricing",
    "does-it-work",
    "platforms"
];
function ChatWidget() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentFollowUps, setCurrentFollowUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ROOT_QUESTIONS);
    const bottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages,
        currentFollowUps
    ]);
    function handleClick(id) {
        const node = QA[id];
        if (!node) return;
        setMessages((prev)=>[
                ...prev,
                {
                    type: "question",
                    text: node.question
                },
                {
                    type: "answer",
                    text: node.answer
                }
            ]);
        setCurrentFollowUps(node.followUps);
    }
    function reset() {
        setMessages([]);
        setCurrentFollowUps(ROOT_QUESTIONS);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 90,
                    right: 24,
                    width: 340,
                    maxHeight: 500,
                    borderRadius: 20,
                    background: "#0f0f1a",
                    border: "1px solid rgba(16,185,129,0.25)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    zIndex: 9999,
                    fontFamily: "Inter, sans-serif"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "13px 16px",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(5,150,105,0.06))",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 9
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #10b981, #059669)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 0 12px rgba(16,185,129,0.4)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 1C4.134 1 1 3.686 1 7c0 1.5.6 2.87 1.6 3.94L2 14l3.26-1.02C6.1 13.3 7.02 13.5 8 13.5c3.866 0 7-2.686 7-6s-3.134-6-7-6z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ChatWidget.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#f0f0f5",
                                                    fontWeight: 700,
                                                    fontSize: 13,
                                                    lineHeight: 1
                                                },
                                                children: "TagMint Help"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: "#10b981",
                                                    fontSize: 11,
                                                    marginTop: 2
                                                },
                                                children: "● Always here"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ChatWidget.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: 8,
                                    alignItems: "center"
                                },
                                children: [
                                    messages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: reset,
                                        style: {
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: 6,
                                            color: "#8080a0",
                                            cursor: "pointer",
                                            fontSize: 11,
                                            padding: "3px 8px"
                                        },
                                        children: "↺ Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            background: "none",
                                            border: "none",
                                            color: "#6060a0",
                                            cursor: "pointer",
                                            fontSize: 20,
                                            lineHeight: 1
                                        },
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: "auto",
                            padding: "14px 14px 8px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8
                        },
                        children: [
                            messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center",
                                    padding: "20px 10px",
                                    color: "#4040a0",
                                    fontSize: 13,
                                    lineHeight: 1.6
                                },
                                children: "👋 Hi! Pick a question below to get started."
                            }, void 0, false, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: msg.type === "question" ? "flex-end" : "flex-start"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            maxWidth: "85%",
                                            padding: "9px 13px",
                                            borderRadius: msg.type === "question" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                                            background: msg.type === "question" ? "linear-gradient(135deg, #10b981, #059669)" : "rgba(255,255,255,0.05)",
                                            color: msg.type === "question" ? "#fff" : "#c0c0d8",
                                            fontSize: 13,
                                            lineHeight: 1.55,
                                            border: msg.type === "answer" ? "1px solid rgba(255,255,255,0.07)" : "none"
                                        },
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/ChatWidget.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/components/ChatWidget.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: bottomRef
                            }, void 0, false, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px 14px 14px",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#404060",
                                    fontSize: 11,
                                    margin: 0,
                                    marginBottom: 2
                                },
                                children: messages.length === 0 ? "What would you like to know?" : "Follow-up questions:"
                            }, void 0, false, {
                                fileName: "[project]/components/ChatWidget.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            currentFollowUps.map((id)=>{
                                const node = QA[id];
                                if (!node) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleClick(id),
                                    style: {
                                        background: "rgba(16,185,129,0.07)",
                                        border: "1px solid rgba(16,185,129,0.2)",
                                        borderRadius: 10,
                                        padding: "8px 12px",
                                        color: "#a0e8c8",
                                        fontSize: 12,
                                        cursor: "pointer",
                                        textAlign: "left",
                                        lineHeight: 1.4,
                                        transition: "all 0.15s"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "rgba(16,185,129,0.14)";
                                        e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "rgba(16,185,129,0.07)";
                                        e.currentTarget.style.borderColor = "rgba(16,185,129,0.2)";
                                    },
                                    children: node.question
                                }, id, false, {
                                    fileName: "[project]/components/ChatWidget.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((o)=>!o),
                style: {
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(16,185,129,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    transition: "transform 0.2s, box-shadow 0.2s"
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 6px 28px rgba(16,185,129,0.6)";
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(16,185,129,0.45)";
                },
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 4l12 12M16 4L4 16",
                        stroke: "white",
                        strokeWidth: "2.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/ChatWidget.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ChatWidget.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11 2C6.582 2 3 5.134 3 9c0 1.8.72 3.44 1.92 4.73L4 18l4.5-1.4C9.6 16.85 10.28 17 11 17c4.418 0 8-3.134 8-7s-3.582-7-8-7z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "8",
                            cy: "9",
                            r: "1",
                            fill: "rgba(5,150,105,0.8)"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "9",
                            r: "1",
                            fill: "rgba(5,150,105,0.8)"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "14",
                            cy: "9",
                            r: "1",
                            fill: "rgba(5,150,105,0.8)"
                        }, void 0, false, {
                            fileName: "[project]/components/ChatWidget.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ChatWidget.tsx",
                    lineNumber: 225,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ChatWidget.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=components_ChatWidget_tsx_0nk_h9f._.js.map