import SmallHeader from "../../layout/SmallHeader"
import backButton from "../../../assets/images/backButton.svg"
import loading from "../../../assets/images/loading.png"
import placeHolder from "../../../assets/images/placeholder.png"
import placeHolderSelect from "../../../assets/images/placeholderselect.png"
import moreIcon from "../../../assets/images/moreIcon.png"
import { useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import useGeoLocation from "../../../assets/map/useGeoLocation"
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import "../../../tailwind/largeMap.css"
import { locations } from "../../../assets/data/mapLocation";
import { setFirstTourDetails } from "../orgnizerSlice"
import { useDispatch } from "react-redux"

function MakeSpecialTour() {
  const [KMdistance, setKMdistance] = useState(0);
  const [HMdistance, setHMdistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [title, setTitle] = useState('')
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const location = useGeoLocation();
  //to get the position that the orgnizer choose
  var selectedLocatons = locations.filter(location => location.select == true);
  // Map parameters
  const zoomLevel = 13;
  const customIcon = new Icon({
    iconUrl: placeHolder,
    iconSize: [65, 50],
  });
  const customIconSelcet = new Icon({
    iconUrl: placeHolderSelect,
    iconSize: [38, 38],
  });
  //to customize the placeholder Icon that apper on the map when more than one place child allocate in the same region
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
      ,
      className: 'custom-marker-cluster',
      iconSize: point(33, 33, true)
    })
  }

  const handelBack = () => {
    var tour={}
    dispatch(setFirstTourDetails(tour))
    navigate('');
  }

  const handelTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handelConfirm = () => {
    var tour={}
    tour.title=title
    tour.KMdistance=KMdistance
    tour.HMdistance=HMdistance
    dispatch(setFirstTourDetails(tour))
    navigate('/make-special-tour/confirm-tour')

  }
  const handelAddNewPlace = () => {
    navigate('/make-special-tour/add-new-place')
  }
  //to draw polyline between to podition on the map
  const drawLine = () => {
    var data = [];

    if (selectedLocatons.length > 1) {
      for (let i = 1; i < selectedLocatons.length; i++) {
        data.push({
          from_lat: selectedLocatons[i - 1].lat,
          from_long: selectedLocatons[i - 1].lng,
          id: "132512",
          to_lat: selectedLocatons[i].lat,
          to_long: selectedLocatons[i].lng
        })
      }
    }

    return data
  }
  const data = drawLine();
  //to calculate distance between selected position
  const calculateDistance = () => {
    var distance = 0;
    if (selectedLocatons.length > 1) {
      for (let i = 1; i < selectedLocatons.length; i++) {
        distance += L.latLng(selectedLocatons[i - 1]).distanceTo(L.latLng(selectedLocatons[i]));
      }
      const distanceInKilometers = distance / 1000;
      const KM = distanceInKilometers.toFixed(2)
      const averageSpeed = 60;
      const travelTimeInHours = distanceInKilometers / averageSpeed;
      const travelTimeInMinutes = travelTimeInHours * 60;
      const H = travelTimeInHours.toFixed(1)
      const D = H / 24
      setKMdistance(KM)
      setHMdistance(H)
      setDuration(D.toFixed())
    }
  }
  // to wait until the distance calculated
  const memorizedData = useMemo(() => { calculateDistance() }, [])
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
          <input type="text" onChange={handelTitleChange} value={title}
            className="drop-shadow-[1px_4px_rgba(117,135,142)] text-input-text-light 
                    xl:h-10 xl:w-64 xl:rounded-xl xl:pl-3 xl:text-xl 
                    lg:h-8 lg:w-48 lg:rounded-lg lg:pl-2 lg:text-lg 
                    md:h-6 md:w-36 md:rounded-md md:pl-1 md:text-base" />

        </div>
      </div>
      <div className="flex flex-row justify-start space-x-5  text-text-light">
        <div className="flex-col space-y-3">
          <div >Distance (KM) : </div>
          <div >Distance (H) :</div>
          <div >Duration (Days) :</div>
        </div>
        <div className="flex-col space-y-3">
          <div >{KMdistance}</div>
          <div >{HMdistance}</div>
          <div >{duration}</div>
        </div>
      </div>
      <div className="flex flex-col justify-start space-y-5 ">
        <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-add-button-light text-button-text-light justify-center items-center
           hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-add-button-hover-light
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md 
            lg:w-36  lg:h-10 lg:text-xl lg:rounded-md 
            md:w-32 md:h-8 md:text-lg md:rounded-md  "
          onClick={handelAddNewPlace}>Add New Place</button>
        <button className="flex flex-row font-['sans-serif']  drop-shadow-[2px_4px_rgba(117,135,142,0.5)] bg-save-button-light text-button-text-light justify-center items-center
            hover:cursor-pointer hover:drop-shadow-[0px] hover:bg-save-button-hover-light
            xl:w-44 xl:h-10  xl:text-2xl xl:rounded-md 
            lg:w-36 lg:h-10 lg:text-xl lg:rounded-md 
            md:w-32 md:h-8 md:text-lg md:rounded-md  "
          onClick={handelConfirm}>Confirm</button>
      </div>
    </div>
    <div className="flex-row text-text-light xl:text-3xl lg:text-2xl md:text-xl font-['serif'] mx-32 mt-10">Select Iternary :</div>
    <div className="flex-row justify-center items-center drop-shadow-[2px_4px_rgba(125,143,154,0.5)] mx-32 py-5">
      {/* Create Map layer  */}
      {!location.loaded ? <img src={loading} className="w-/12 h-1/12 ml-80" /> :
        <MapContainer center={[location.cordinates.lat, location.cordinates.lng]} zoom={zoomLevel}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Create Map Marker & Groouping them into Cluster */}
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {locations.map(location => {
              return (
                <Marker id={location.id} position={[location.lat, location.lng]} icon={location.select ? customIconSelcet : customIcon} >
                  {/* configure the popup that showen when hover the position marker */}
                  <Popup>
                    <div className="flex flex-col justify-center items-center">
                      <span className="flex-row text-base font-semibold text-text-light">{location.name}</span>
                      <span className="flex-row text-base font-semibold text-text-light"><span className="text-title-light font-normal">size :</span> {location.size}</span>
                      <a href={location.url}><img src={moreIcon} className="flex flex-row w-5 h-5 my-1 cursor-pointer" /></a>
                    </div>
                  </Popup>
                </Marker>)
            })}

            {data.map(({ id, from_lat, from_long, to_lat, to_long }) => {
              return <Polyline key={id} positions={[
                [from_lat, from_long], [to_lat, to_long],
              ]} color={'red'} />
            })}
          </MarkerClusterGroup>

          {/* <MapEvents /> */}
        </MapContainer>}
    </div>
  </div>)
}
export default MakeSpecialTour