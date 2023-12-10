import React from 'react';

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Baku Engineering University Map"
          src="https://maps.google.com/maps?q=Baku%20Engineering%20University&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          style={{ width: '150px', height: '150px' }}
          allowFullScreen
        ></iframe>
        <style>
          {`
            .mapouter {
              position: relative;
              height: 150px;
              width: 150px;
              background: #fff;
            }

            .gmap_canvas {
              overflow: hidden;
              height: 150px;
              width: 150px;
            }

            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default MapComponent;
