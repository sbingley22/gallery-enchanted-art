/* eslint-disable react/prop-types */

const InfoText = ({ showInfo }) => {

  if (showInfo == null) return
  
  return (
    <div className="info-text">
      <p>{showInfo}</p>
    </div>
  )
}

export default InfoText
