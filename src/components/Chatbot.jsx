import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hey! I’m your CouchBot. How can I assist you with couches today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (message) => {
    const lower = message.toLowerCase();

    // Check for greetings
    if (
      lower.includes("hey") ||
      lower.includes("hi") ||
      lower.includes("hello") ||
      lower.includes("greetings")
    ) {
      return "Hello! How can I assist you with our couches today?";
    }

    // Check for couch-related queries
    if (
      lower.includes("types") ||
      lower.includes("styles") ||
      lower.includes("what types of couches")
    ) {
      return "We offer various types of couches such as sectional sofas, recliners, love seats, and sleeper sofas. Would you like more details on any specific type?";
    }

    // Check for price-related queries
    if (
      lower.includes("price") ||
      lower.includes("cost") ||
      lower.includes("how much")
    ) {
      return "Our couches range from $300 to $2000, depending on the size, material, and features. For detailed pricing, visit our 'Shop Couches' page!";
    }

    // Check for availability-related queries
    if (
      lower.includes("availability") ||
      lower.includes("in stock") ||
      lower.includes("available")
    ) {
      return "We have a variety of couches in stock. Visit our 'Shop Couches' page for real-time availability updates!";
    }

    // Check for delivery-related queries
    if (
      lower.includes("delivery") ||
      lower.includes("shipping") ||
      lower.includes("when will it arrive")
    ) {
      return "We offer free delivery within 5-7 business days! You can track your delivery status on our 'Order Tracking' page.";
    }

    // Check for material-related queries
    if (
      lower.includes("material") ||
      lower.includes("fabric") ||
      lower.includes("leather") ||
      lower.includes("wood")
    ) {
      return "Our couches are made from a variety of high-quality materials including leather, velvet, cotton, and microfiber. Would you like more details on a particular material?";
    }

    // Check for thank you responses
    if (
      lower.includes("thank you") ||
      lower.includes("thanks") ||
      lower.includes("thank you very much")
    ) {
      return "Thank you for considering our couches! We hope you find the perfect one for your home!";
    }

    // Default response for unknown queries
    return "Hmm, I’m still learning! Can you rephrase that or visit our Contact page for more assistance?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botReply = {
        text: getBotResponse(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 600);

    setInput("");
  };

  const quickReplies = [
    "🛋️ Types of Couches",
    "💸 Ask Price",
    "📦 Availability & Delivery",
    "🪑 Material Options",
  ];

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#007bff" : "#e9ecef",
              color: msg.sender === "user" ? "#fff" : "#000",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div style={styles.quickReplies}>
        {quickReplies.map((text, i) => (
          <button
            key={i}
            onClick={() => {
              setInput(text);
              setTimeout(handleSend, 100);
            }}
            style={styles.quickButton}
          >
            {text}
          </button>
        ))}
      </div>

      <div style={styles.inputArea}>
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "500px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    height: "400px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#f8f9fa",
  },
  message: {
    padding: "10px 14px",
    borderRadius: "20px",
    maxWidth: "70%",
  },
  quickReplies: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "10px",
    gap: "8px",
    backgroundColor: "#f1f1f1",
    borderTop: "1px solid #ddd",
  },
  quickButton: {
    backgroundColor: "#fff",
    border: "1px solid #007bff",
    color: "#007bff",
    padding: "6px 12px",
    borderRadius: "18px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "all 0.2s",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "20px",
    marginRight: "8px",
    outline: "none",
  },
  button: {
    backgroundColor: "#007bff",
    border: "none",
    color: "white",
    padding: "10px 16px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default ChatBot;
