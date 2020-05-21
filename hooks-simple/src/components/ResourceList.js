import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = () => {
  const [resources, setResources] = useState([]);
  const fetchResource = async () => {
    const response = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: response.data });
  };

  return <div>{this.state.resources.length}</div>;
};

export default ResourceList;
