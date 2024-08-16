"use client"

import { useState,useEffect } from "react";

export default function Home() {

  const [makesCount, setMakesCount] = useState<number>(0);
  const [modelsCount, setModelsCount] = useState<number>(0);
  const [variantsCount, setVariantsCount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const makesResponse = await fetch('https://whitebook-engine.kuala.io/get-vehicle-makes');
        const makesData = await makesResponse.json();
        setMakesCount(makesData.data.length);

        const modelsResponse = await fetch('https://whitebook-engine.kuala.io/model');
        const modelsData = await modelsResponse.json();
        setModelsCount(modelsData.data.length);

        const variantsResponse = await fetch('https://whitebook-engine.kuala.io/get-vehicle-variants/24');
        const variantsData = await variantsResponse.json();
        setVariantsCount(variantsData.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="background">
 <div className="card">
    <div className="box"><span><h3>Vehicle Makes</h3></span>  
    <div className="content">
      
        <p className="api_value box"> {makesCount}  </p>
        {/* <br />vehicles */}
        
           </div>
    </div>
    
    <div className="box"><span><h3>Vehicle Models</h3></span>
    <div className="content">
        <p className="api_value box">{modelsCount}</p>
      </div>
    </div>
    
    <div className="box"><span><h3>Variants Count</h3></span>
      <div className="content">
        <p className="api_value box"> {variantsCount}</p>
      </div>
    </div>
</div>
    </div>
  );
}
