import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});


class CustomizeSection extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default CustomizeSection;