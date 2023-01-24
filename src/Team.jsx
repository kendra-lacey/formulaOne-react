import Driver from "./Driver";


const Team = (props) => {
  return ( 
    < >
    <h3>{props.team.name} uses a {props.team.engine} engine, and has Won {props.team.championships} World Championships</h3>
    {props.team.drivers.map(driver => // mapping each driver to a team component!
      <Driver
      teamName={props.team.name}
      key={driver}
      driver={driver}
      />
    )}
    </>
  );
}

export default Team;