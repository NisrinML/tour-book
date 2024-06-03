import React from 'react'

const MapLocate = () => {
        const [position, setposition] = usestate(null);
        const [bbox, setbbox] = usestate([]);
    
        const map = usemap();
    
        useeffect(() => {
          map.locate().on("locationfound", function (e) {
            setposition(e.latlng);
            map.flyto(e.latlng, map.getzoom());
            const radius = e.accuracy;
            const circle = l.circle(e.latlng, radius);
            circle.addto(map);
            setbbox(e.bounds.tobboxstring().split(","));
          });
        }, [map]);
    
        return position === null ? null : (
          <marker position={position} icon={icon}>
            <popup>
              you are here. <br />
              map bbox: <br />
              <b>southwest lng</b>: {bbox[0]} <br />
              <b>southwest lat</b>: {bbox[1]} <br />
              <b>northeast lng</b>: {bbox[2]} <br />
              <b>northeast lat</b>: {bbox[3]}
            </popup>
          </marker>
        );
      
}

export default MapLocate
