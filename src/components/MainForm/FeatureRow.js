import React from "react";
import FeatureList from "./FeatureList";

class FeatureRow extends React.Component {
  render() {
    return (
      <div className="feature" key={this.props.name}>
        <div className="feature__name">{this.props.name}</div>
        <FeatureList
          features={this.props.features}
          name={this.props.name}
          handleUpdate={this.props.handleUpdate}
          selected={this.props.selected}
        />
      </div>
    );
  }
}

export default FeatureRow;
