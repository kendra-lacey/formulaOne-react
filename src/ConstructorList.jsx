import Team from "./Team";


const ConstructorList = (props) => {
  return ( 
  < >
    <h1> This is a F1 List</h1>
    {props.teams.map(team =>
      <Team key={team.name} team={team}/>
      )}
    </>
  )    
}

export default  ConstructorList;