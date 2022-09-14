import { Status, Wrapper } from '@googlemaps/react-wrapper'
import { GoogleMap } from './Map'
import { Marker } from './Marker'

const render = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>
  if (status === Status.FAILURE) return <h3>{status} ...</h3>
  return <div></div>
}

export const Map = () => {
  const center = { lat: 35.6598003, lng: 139.7023894 }
  const zoom = 19

  return (
    <div className="h-screen w-full">
      <Wrapper
        apiKey={'AIzaSyDWpuF7x9YJ8qIE9S531u2qVN18lRCK5aM'}
        render={render}
      >
        <GoogleMap center={center} zoom={zoom}>
          <Marker
            position={{
              lat: 35.6598003,
              lng: 139.7023894,
            }}
          />
        </GoogleMap>
      </Wrapper>
    </div>
  )
}
