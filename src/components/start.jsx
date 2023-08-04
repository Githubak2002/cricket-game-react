import React, {useState} from 'react'
import Playing from "./playing"
import Out from "./out"

const Start = () => {

  const [userStatus, SetuserStatus] = useState(true);

  const [score, SetTotalScore] = useState(0);

  function SetStatusFun(scorevar){
    SetuserStatus((prev) => !prev)
    console.log(`Total runs scored ${scorevar}`)
    SetTotalScore(scorevar);
  }

  return (
    <>
      {
        userStatus ? <Playing fun={SetStatusFun}/> : <Out totalRuns = {score}/>
      }
    </>
  )
}

export default Start