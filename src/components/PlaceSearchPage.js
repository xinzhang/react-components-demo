import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Map from './Map'
import './PlaceSearchPage.css';

class PlaceSearchPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        address: '',
        geocodeResults: null,
        loading: false
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange(address) {
    this.setState({
      address,
      geocodeResults: null
    })
  }

    render() {
        const cssClasses = {
            root: 'form-group',
            input: 'Demo__search-input',
            autocompleteContainer: 'Demo__autocomplete-container',
          }
      
          const AutocompleteItem = ({ formattedSuggestion }) => (
            <div className="Demo__suggestion-item">
              <i className='fa fa-map-marker Demo__suggestion-icon'/>
              <strong>{formattedSuggestion.mainText}</strong>{' '}
              <small className="text-muted">{formattedSuggestion.secondaryText}</small>
            </div>)
      
          const inputProps = {
            type: "text",
            value: this.state.address,
            onChange: this.handleChange,
            onBlur: () => { console.log('Blur event!'); },
            onFocus: () => { console.log('Focused!'); },
            autoFocus: true,
            placeholder: "Search Places",
            name: 'Demo__input',
            id: "my-input-id",
          }

        return (
            <div className='container'>
                <Map mapInitialized={() =>{}}/>
                <PlacesAutocomplete                
                    autocompleteItem={AutocompleteItem}                
                    classNames={cssClasses}
                    inputProps={inputProps}
                />
                {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
                {!this.state.loading && this.state.geocodeResults ?
                <div className='geocoding-results'>{this.state.geocodeResults}</div> :
                null}
          </div>

        )
    }

}

export default PlaceSearchPage;