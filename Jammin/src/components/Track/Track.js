import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackKey: this.props.key,
      trackArtist: this.props.track.artist,
      trackName: this.props.track.name,
      trackAlbum: this.props.track.album
    };
    this.renderState = this.renderState.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    //this.updateTrack = this.updateTrack.bind(this);
  }

  renderState() {
    this.setState({
      trackKey: this.props.key,
      trackArtist: this.props.track.artist,
      trackName: this.props.track.name,
      trackAlbum: this.props.track.album
    });
 }

  addTrack() {
    //this.setState({:});
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    //this.setState({:});
    this.props.onRemove(this.props.track);
  }

  // updateTrack() {
    //this.setState({:});
  // }

  renderAction(isRemoval) {
    return (isRemoval
      ? <a className="Track-action" onClick={this.removeTrack}>-</a>
      : <a className="Track-action" onClick={this.addTrack}>+</a>);
  }

  /*
  if (isRemoval == true) {
    console.log('<a className="Track-action">-</a>');
  } else if (isRemoval == false) {
    console.log('<a className="Track-action">+</a>');
  } //OR ^^
  */

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>
            {this.state.trackName}
          </h3>
          <p>{this.state.trackArtist} | {this.state.trackAlbum}</p>
        </div>
        <a className="Track-action">
          {this.renderAction(this.props.isRemoval)}
        </a>

      </div>
    );
  }
};
//simply this.renderAction
//Could be this.props.track ^^ >>}
export default Track;
