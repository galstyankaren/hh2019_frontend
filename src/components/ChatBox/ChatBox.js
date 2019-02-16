import React, { Component } from "react";
import "./ChatBox.css";

class ChatBox extends Component {
  render() {
    //TODO separate Chat bubble
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content">{text}</span>
        </div>
      );
    };
    const chat = this.props.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div>
        <div className="chat-window">
          <div className="conversation-view">{chat}</div>
          <div className="message-box">
            <form onSubmit={this.props.handleSubmit}>
              <input
                value={this.props.userMessage}
                onInput={this.props.handleTextInput}
                className="text-input"
                type="text"
                autoFocus
                placeholder="Type your message and hit Enter to send"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatBox;
