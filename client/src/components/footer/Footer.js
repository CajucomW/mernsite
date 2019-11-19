import React, { Component } from 'react';
import './Footer.css';

  render() {
    return (
      <div className="Footer">
        <h1>Write an article</h1>
        <input
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
        <br />

        <textarea
            name="content"
            placeholder="Contents"
            value={this.state.details}
            onChange={this.onChangeContent}
          />

        <br />

        <button onClick={this.submit}>Add to blog</button>
      </div>

    );
  }
}

export default Footer;
