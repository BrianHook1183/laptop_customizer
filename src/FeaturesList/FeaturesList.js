import React from 'react';
import slugify from 'slugify';
import FEATURES from '../FEATURES';
import FeatureItem from '../FeatureItem/FeatureItem';
import './FeatureList.css';

class FeaturesList extends React.Component {
  render() {
    const { selectedFeatures } = this.props
    const features = Object.keys(FEATURES).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = FEATURES[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem 
            itemHash={itemHash}
            feature= {feature}
            item= {item}
            selectedFeature= {selectedFeatures[feature]}
            handleSelection= {this.props.handleSelection}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return (
      <>
        {features}
      </>
    );
  }
}

export default FeaturesList;