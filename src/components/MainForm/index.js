import React from "react";
import FeatureRow from "./FeatureRow";

class MainForm extends React.Component {
  render() {
    const featureRow = Object.keys(this.props.features).map(key => (
      <FeatureRow
        key={key}
        name={key}
        features={this.props.features[key]}
        handleUpdate={this.props.handleUpdate}
        selected={this.props.selected}
      />
    ));

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {featureRow}
      </section>
    );
  }
}

export default MainForm;
