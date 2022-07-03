// import "./header.css"
// function Localizacao() {
//   return (
//     <>
//       <div id="localizacao">
//         <h1>Localizacao</h1>
        
//       </div>
//     </>
//   );
// }
// export default Localizacao;

import React, { useEffect, useRef } from 'react';

function Localizacao() {
  const mapRef = useRef();
  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -23.162598722595003, lng: -46.89289022723097 },
          zoom: 12,
    });
  }, []);
  return <div id="localização" ref={mapRef} style={{ width: 500, height: 500 }}></div>;
  
  
}

export default Localizacao;