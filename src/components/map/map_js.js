// import React, { useState } from "react";
// import "components/map/map.css";
// import {
//     GoogleMap,
//     LoadScript,
//     Marker,
//     InfoWindow,
// } from "@react-google-maps/api";
// import properties from "components/map/test.json";
// import ModalPerformance from "../common/ModalPerformance";
// import Modal from "components/common/Modal";
// import TourList from "pages/TourList";

// const Map = () => {
//     const [selectedProperty, setSelectedProperty] = useState(false);

//     return (

//         <LoadScript

//             googleMapsApiKey="AIzaSyBk-r05fmcxZGWmGPbLwaWcba_koux0w_8"
//             language={"en"}
//             region={"EN"}
//             version={"weekly"}
//             loadingElement={<div>Loading...</div>}
//         >
//             <GoogleMap

//                 mapContainerStyle={{
//                     width: "70vw",
//                     height: "89.5vh",
//                     float: "right",
//                     marginRight:"0px"

//                 }}
//                 zoom={8}
//                 center={{ lat: 37.5, lng: 127 }}
//             >
//                 {properties.map((property) => (
//                     <Marker
//                     title={'The marker`s title will appear as a tooltip.'}
//     name={'SOMA'}

//                         key={property.masterid}
//                         position={{
//                             lat: property.mapy,
//                             lng: property.mapx,
//                         }}
//                         // icon={{
//                         //   url: "https://i.imgur.com/FpHIBa7.png",
//                         //   scaledSize: new window.google.maps.Size(25, 25),
//                         // }}
//                         onClick={() => {
//                             setSelectedProperty(property);
//                         }}
//                     />
//                 ))}
//                 <ModalPerformance/>
//                 <TourList img={selectedProperty.firstimage}></TourList>
//                 {/*<div className="collection">*/}
//                 {/*    <div></div>*/}

//                 {/*</div>*/}
//                 {selectedProperty && (
//                     <InfoWindow
//                         position={{
//                             lat: selectedProperty.mapy,
//                             lng: selectedProperty.mapx,
//                         }}
//                         onCloseClick={() => {
//                             setSelectedProperty(null);
//                         }}
//                     >

//                         <div className="mapinfo">
//                             <div className="cityname">
//                                 <span>{selectedProperty.addr1}</span>
//                             </div>
//                             <img
//                                 src={selectedProperty.firstimage}
//                                 alt="test.json"
//                                 style={{ width: "250px", height: "168px" }}
//                             />
//                             <span>{selectedProperty.title}</span>
//                             <br />
//                         </div>
//                     </InfoWindow>
//                 )}
//             </GoogleMap>
//         </LoadScript>
//     );
// };

// export default Map;
