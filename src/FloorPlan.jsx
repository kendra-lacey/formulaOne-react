import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = (props) => {
  const bedNum= ['1','2','3']
  return ( 
    <>
    <div> 
    <Bedroom name="Bedroom " bedNum={bedNum[0]} />
    <Kitchen name="Kitchen"/>
    <LivingRoom name="Living Room"/>
    <Bedroom name="Bedroom " bedNum={bedNum[1]} />
    <Bath name="Bath" size="Half" />
    <Bedroom name="Bedroom " bedNum={bedNum[2]} />
    <Bath name="Bath" size="Full" />
    </div>
    </>
  )
}

export default FloorPlan;

