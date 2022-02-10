import { useState, useEffect } from "react";



const Dates = () => {
  const [dateList, setDateList] = useState([]);

  const getAllTotems = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}/totem/date/order`,

      {
        mode: "cors",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const dated = await res.json();
    setDateList(dated);
    console.log(dated);
  };

  useEffect(() => {
    getAllTotems();
  });

  //======================= main return =======================//

  return (
     
    <div className="dateContainer">
        
        <div className="dateList">
        {dateList.map((item, index) => {
            return (
              
                <DateIllus key={index} item={item}  />
                
            );
          })}

          </div>
          <div className="verticalLine"></div>
        </div>
      
  )
    };
 


const DateIllus = ({item}) => {

 return(

<div className="illusAndDateAndLine">
       
        <div className="IllusAndLine">
        
    <img src={item.illustration} alt="totem"  className="totemIllusDate" />
    <div className="attachLine"></div>
    </div>

    <div className="totemNameDate">
    <h2>{item.name}</h2>
    <h2>Year: {item.date}</h2>
    
    </div>
    
    </div>
  
 )
};




export default Dates;