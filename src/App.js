import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Text from './components/Text'
import QRCode from 'react-qr-code'

function App() {
  const [qrText, setQrText] = useState("");
  return (
      <Container className='mx-auto'>
      	<h1 className='my-4'>Qr Generator</h1>
      	{qrText.length > 0 && <QRCode value={qrText} />}

      <Text setQrText={setQrText} />

      </Container>
  );
}

export default App;