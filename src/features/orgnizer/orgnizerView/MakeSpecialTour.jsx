import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import loading from "../../../assets/images/loading.png"
import placeHolder from "../../../assets/images/placeholder.png"
import placeHolderSelect from "../../../assets/images/placeholderselect.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer,Polyline } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import useGeoLocation from"../../../assets/map/useGeoLocation"
import MarkerClusterGroup from 'react-leaflet-cluster';
import MapEvents from "../../../assets/map/mapEvents"
import 'leaflet/dist/leaflet.css';
import { locations } from "../../../assets/data/mapLocation";

function MakeSpecialTour() {
    const [KMdistance, setKMdistance] = useState(0);
    const [HMdistance, setHMdistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [title,setTitle]=useState('')
    const navigate = useNavigate();
    const location =useGeoLocation();
    const position = [48.8568, 2.3522]; // [latitude, longitude]
    const zoomLevel = 13;
    const customIcon = new Icon({
        iconUrl:placeHolder,
        iconSize: [65, 50],
      });
      const customIconSelcet = new Icon({
        iconUrl:placeHolderSelect,
        iconSize: [38, 38],
      });
    const createCustomClusterIcon=(cluster)=>{
      return new divIcon({
          html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
      ,
      className:'custom-marker-cluster',
      iconSize:point(33,33,true)
        })
    }
   
    const handelBack=()=>{
            navigate('');
    }

    const handelTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    var _firstLatLng={lat:34.7207443, lng:36.7173883};
    var  _secondLatLng={lat:34.776043258519174, lng:36.6026282253172}
 
    var data= [
      {
        from_lat: "34.7207443",
        from_long: "36.7173883",
        id: "132512",
        to_lat: "34.776043258519174",
        to_long: "36.6026282253172",
      }
    ]

    return (<div className="flex flex-col">
        <SmallHeader />
        <div className="flex flex-row justify-between  mx-20 mt-10">
            <div className="flex flex-row justify-between items-center xl:space-x-10 md:space-x-7">
                <img src={backButton} onClick={handelBack} className="hover:cursor-pointer 
                xl:w-12 xl:h-12
                lg:w-10 lg:h-10
                md:w-8 md:h-8" />
                <div className=" text-text-light xl:text-2xl lg:text-xl md:text-base font-['serif']">Tour Title :</div>
                <div>
                    <input type="text" onChange={handelTitleChange}
                        className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light 
                    xl:h-10 xl:w-64 xl:rounded-xl xl:pl-3 xl:text-xl 
                    lg:h-8 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-lg 
                    md:h-6 md:w-36 md:rounded-md md:pl-1 md:text-base" />

                </div>
            </div>
            <div className="flex flex-row justify-start space-x-5  text-text-light">
                <div className="flex-col space-y-3">
                    <div >Distance (KM) : </div>
                    <div >Distance (hh:mm) :</div>
                    <div >Duration (days) :</div>
                </div>
                <div className="flex-col space-y-3">
                    <div >{KMdistance}</div>
                    <div >{HMdistance}</div>
                    <div >{duration}</div>
                </div>
            </div>
            <div className="flex flex-col justify-start space-y-5 ">
                <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light pt-1
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md xl:pl-3
            lg:w-36  lg:h-10 lg:text-xl lg:rounded-md lg:pl-2
            md:w-32 md:h-8 md:text-lg md:rounded-md  md:pl-2">Add New Place</button>
                <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-save-button-light text-button-text-light pt-1
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md xl:pl-11
            lg:w-36 lg:h-10 lg:text-xl lg:rounded-md  lg:pl-9
            md:w-32 md:h-8 md:text-lg md:rounded-md  md:pl-9">Confirm</button>
            </div>
        </div>
        <div className="flex-row text-text-light xl:text-3xl lg:text-2xl md:text-xl font-['serif'] mx-32 mt-10">Select Iternary :</div>
        <div className="flex-row justify-center items-center drop-shadow-[2px_4px_rgba(125,143,154,0.5)] mx-32 py-5">
        {!location.loaded? <img src={loading} className="w-/12 h-1/12 ml-80"/>:
      <MapContainer  center={[location.cordinates.lat,location.cordinates.lng]} zoom={zoomLevel}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {locations.map(location=>{
            return (
            <Marker position={[location.lat,location.lng]} icon={location.select?customIconSelcet:customIcon} >
            <Popup>
              <h2>{location.name}</h2>
            </Popup>
          </Marker>)
          })}
          {/* {locations.filter((location)=>location.select==true).map((location) => {
        return <Polyline key={location.id} positions={[
          [location.lat,location.lng], [location.lat, location.lng],
        ]} color={'red'} />
      })} */}
          {data.map(({id, from_lat, from_long, to_lat, to_long}) => {
        return <Polyline key={id} positions={[
          [from_lat, from_long], [to_lat, to_long],
        ]} color={'red'} />
      })}
        </MarkerClusterGroup>
        <MapEvents/>
      </MapContainer>} 
        </div>
    </div>)
}
export default MakeSpecialTour