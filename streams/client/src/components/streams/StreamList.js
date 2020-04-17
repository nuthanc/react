import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("Streams in mapstop", state.streams);
  console.log("AFter object.values", Object.values(state.streams));
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
