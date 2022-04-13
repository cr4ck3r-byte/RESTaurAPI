import { FaArrowAltCircleLeft } from "react-icons/fa"

const Exit = ({action, text='Volver', iconColor='#ccc'}) => {
  return (
    <div style={{display: 'flex', marginTop: '25px'}} onClick={action}>
        <FaArrowAltCircleLeft size={25} color={iconColor} style={{ display: 'inline-block'}}/>
        <p style={{color: '#000',display: 'inline-block', textAlign: 'start', fontSize: '20px', fontFamily: 'Roboto, sans-serif', marginLeft: '5px'}}>{text}</p>
    </div>
  )
}
export default Exit