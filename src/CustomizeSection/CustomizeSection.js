import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import FeaturesList from '../FeaturesList/FeaturesList';


class CustomizeSection extends React.Component {
  render() {

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeaturesList 
          features={this.props.features}
          selectedFeatures={this.props.selectedFeatures}
          handleSelection= {this.props.handleSelection}
        />
      </form>
    )
  }
}

CustomizeSection.defaultProps = {
  features: []
};

export default CustomizeSection;