import qrGif from '../assets/PettyWhirlwindCrocodile-max-1mb.gif'

const QrExample = () => {

    setTimeout(() => {
        window.location.href = 'https://qrcodescan.in'
    }, 5000)

  return (
    <div style={{width: '100%', textAlign: 'center'}}>
        <h2 style={{fontSize: '40px', fontFamily: "'Bebas Neue', cursive"}}>Por favor escanee el codigo qr que se encuentra en su mesa, en un momento será enviado a la pagina</h2>
        <img src={qrGif} alt="Como escanear codigo qr" style={{width: '90%'}}/>
    </div>
  )
}
export default QrExample