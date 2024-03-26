import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 24.7551,
            lng: 92.78682
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div className="max-h-96 w-1/3 rounded-lg">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    text="NIT SILCHAR"
                />
            </GoogleMapReact>
        </div>)
}