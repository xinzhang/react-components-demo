import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

const google = window.google;

export class Map extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        // setup bindings
        this.configureMap = this.configureMap.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.onIdle = this.onIdle.bind(this);
        this.onZoom = this.onZoom.bind(this);
        this.setPositionAndZoom = this.setPositionAndZoom.bind(this);

        // setup some local state
        this.state = {
            //  value: props.value === null ? "" : props.value,
            mapElementId: shortid.generate(),
            map: null,
            markers: [],
            polylines: []
        };
    }

    componentDidMount() {

        this.configureMap();
        //  this.parseChildren(this.props);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.flyTo) {
            this.setPositionAndZoom(nextProps.flyTo.position, nextProps.flyTo.zoom);
        }
    }

    setPositionAndZoom(position, zoom) {
        this.state.map.panTo(position);
        this.state.map.setZoom(zoom);
    }

    onMapClicked(e) {
        this.props.onClick({ longitude: e.latLng.lng(), latitude: e.latLng.lat() });
    }

    onZoom() {
        if (this.props.onZoom) {
            this.props.onZoom(this.state.map.getZoom());
        }
    }

    onIdle() {
        const _self = this;
        const zoom = _self.state.map.getZoom();
        const center = _self.state.map.getCenter();
        const bounds = _self.state.map.getBounds();
        const neBound = bounds.getNorthEast();
        const radius = 1000;

        _self.props.onCenterChanged(center.lng(), center.lat(), radius, zoom);
    }

    configureMap() {
        const _self = this;
        console.log('mapElementId', _self.state.mapElementId);
        // create a map instance
        let map = new google.maps.Map(document.getElementById(_self.state.mapElementId), {
            zoom: _self.props.zoom ? _self.props.zoom : 1,
            center: _self.props.center
                ? _self.props.center
                : {
                    lng: 144.9144935505437,
                    lat: -33.43487246198266
                },
            streetViewControl: true,
            mapTypeId: _self.props.mapType,
            scaleControl: true,
            fullscreenControl: false
        });



        if (_self.props.onClick) {
            map.addListener("click", _self.onMapClicked);
        }

        if (_self.props.onCenterChanged) {
            // idle event: This event is fired when the map becomes onIdle after panning or zooming.
            map.addListener("idle", _self.onIdle);
        }

        if (_self.props.onZoom) {
            // idle event: This event is fired when the map becomes onIdle after panning or zooming.
            map.addListener("zoom_changed", _self.onZoom);
        }



        setTimeout(function () {
            google.maps.event.trigger(map, "resize");
        }, 1000);

        this.setState({ map: map });

        this.props.mapInitialized(map);

    }

    renderMapItems = (children) => {
        return React.Children.map(children, child => {
            // if (child) {
            //   if(child.type === Polyline) {
            //     if(this.props.showConductors) {
            //       return React.cloneElement(child, {map: this.state.map}, child.props.children);
            //     }
            //   } else {
            //     return React.cloneElement(child, {map: this.state.map}, child.props.children);
            //   }
            // }
        });
    }

    render() {
        const divStyle={height:500}
        return (
            <div id={this.state.mapElementId} style={divStyle}>
                <span>&bnsp;</span>
                {this.renderMapItems(this.props.children)}
            </div>
        );
    }
}

Map.propTypes = {
    center: PropTypes.object,
    mapType: PropTypes.string,
    zoom: PropTypes.number,
    onMapReady: PropTypes.func,
    onClick: PropTypes.func,
    onCenterChanged: PropTypes.func,
    onZoom: PropTypes.func,
    markers: PropTypes.array,
    workingArias: PropTypes.array,
    flyTo: PropTypes.object,
    value: PropTypes.object,
    onOverlayComplete: PropTypes.func,
    children: PropTypes.array
};

export default Map;
