/* eslint-disable @typescript-eslint/ban-types */
import { Button, Menu, MenuItem } from '@3design/3design-ui';
import { Sidebar } from '@/components/layout/sidebar';
import { Layout } from '@/components/ui-parts/layout';
import { PageTitle } from '@/components/ui-parts/layout/pagetitle';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMap } from './GoogleMap';
import { Marker } from './Marker';

const render = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <div></div>;
};

// const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: 35.68156736022668, lng: 139.76761832643018 };
const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: -28.024, lng: 140.887 };

type Props = {};

const SearchItem = (props: Props) => {
  return (
    <div
      className="bg-shade-white-default hover:bg-shade-white-hover w-[calc(100%/9)] cursor-pointer text-center"
      {...props}
    >
      <div className="py-2">
        <h2 className="text-s py-1 font-bold">物件種別</h2>
        <h2 className="py-1 text-xs font-bold">指定なし</h2>
      </div>
    </div>
  );
};

export const Map = () => {
  const center = DEFAULT_CENTER;
  const zoom = 3;

  return (
    <Layout SidebarComponent={Sidebar}>
      <PageTitle
        breadcrumbs={[
          {
            title: 'ダッシュボード',
            href: '/',
          },
          {
            title: 'ダッシュボード',
            href: '/',
          },
        ]}
        subtitle="説明文など"
      />

      <div className="h-screen w-full">
        <div className="flex w-full">
          <Menu
            TriggerComponent={<SearchItem />}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            classes={{
              list: 'p-0',
            }}
          >
            <div className="bg-shade-white-default w-80">
              <h2 className="bg-shade-dark-default w-full p-2 font-bold">駅徒歩</h2>
              <h2>バス徒歩</h2>
            </div>
          </Menu>

          <Menu TriggerComponent={<SearchItem />}>
            <div></div>
          </Menu>
        </div>

        <Wrapper apiKey="AIzaSyDWpuF7x9YJ8qIE9S531u2qVN18lRCK5aM" render={render}>
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
    </Layout>
  );
};
