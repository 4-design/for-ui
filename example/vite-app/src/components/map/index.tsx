import { Checkbox, Menu, Radio, RadioGroup, TextField } from '@3design/3design-ui';
import { PopoverOrigin } from '@mui/material';
import { Sidebar } from '@/components/layout/sidebar';
import { Layout } from '@/components/ui-parts/layout';
import { PageTitle } from '@/components/ui-parts/layout/pagetitle';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { GoogleMapProvider } from '@/components/ui-parts/map/GoogleMapProvider';
import { MarkerCluster } from '@/components/ui-parts/map/MarkerCluster';
import { Marker } from '@/components/ui-parts/map/Marker';

const locations: google.maps.LatLngLiteral[] = [
  { lat: -31.56391, lng: 147.154312 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];

const InfoWindow = () => {
  return (
    <div>
      <h2 className="text-shade-dark-default text-sm font-bold">
        グランヴィスタ神田練塀町(グランヴイスタカンダネリベイチヨウ)
      </h2>

      <div className="flex h-36">
        <div className="flex w-1/2">
          <img
            alt="物件画像"
            src="https://img4.athome.jp/image_files/path/iPHKzCSCLlVxKFqGRr7M4OByxgQxYdyP?height=174&width=215&margin=true&dummy=.p"
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <div>ワンルーム</div>
          <div>7万1000円</div>
        </div>
      </div>

      <div>都営新宿線 岩本町 徒歩1分</div>
      <div>千代田区神田須田町２丁目８</div>
    </div>
  );
};

const render = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return <div></div>;
};

// const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: 35.68156736022668, lng: 139.76761832643018 };
const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: -28.024, lng: 140.887 };

const anchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'center',
};

const transformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'center',
};

type Props = {
  title: string;
  subtitle: string;
};

const SearchItem = (props: Props) => {
  return (
    <div
      className="bg-shade-white-default hover:bg-shade-white-hover w-[calc(100%/9)] cursor-pointer text-center"
      {...props}
    >
      <div className="py-2">
        <h2 className="text-s py-1 font-bold">{props.title}</h2>
        <h2 className="py-1 text-xs font-bold">{props.subtitle}</h2>
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
        <div className="border-shade-light-default flex w-full min-w-[1024px] border-b border-solid">
          <Menu
            nopadding
            TriggerComponent={<SearchItem title="物件情報" subtitle="指定なし" />}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">駅徒歩</h2>
              </div>

              <div className="p-3">
                <Checkbox value="required" label="貸マンション" />
                <Checkbox value="required" label="貸アパート" />
                <Checkbox value="required" label="貸戸建て住宅" />
              </div>
            </div>
          </Menu>

          <Menu
            nopadding
            TriggerComponent={<SearchItem title="駅徒歩" subtitle="指定なし" />}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">駅徒歩</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>
            </div>
          </Menu>

          <Menu
            TriggerComponent={<SearchItem title="価格・賃料" subtitle="指定なし" />}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            nopadding
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">借りる</h2>
              </div>

              <div className="flex items-center p-3">
                <TextField
                  required
                  variant="outlined"
                  autoComplete="on"
                  placeholder="3"
                  unitLabel="万円"
                  isPriceFormat
                />

                <div className="px-3">~</div>

                <TextField
                  required
                  variant="outlined"
                  autoComplete="on"
                  placeholder="3"
                  unitLabel="万円"
                  isPriceFormat
                />
              </div>
            </div>
          </Menu>

          <Menu
            nopadding
            TriggerComponent={<SearchItem title="建物情報" subtitle="指定なし" />}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">築年数</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">階指定</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">建物構造</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>
            </div>
          </Menu>

          <Menu
            nopadding
            TriggerComponent={<SearchItem title="間取り・面積" subtitle="指定なし" />}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">築年数</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">階指定</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">建物構造</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>
            </div>
          </Menu>

          <Menu
            nopadding
            TriggerComponent={<SearchItem title="土地権利" subtitle="指定なし" />}
            anchorOrigin={anchorOrigin}
            transformOrigin={transformOrigin}
          >
            <div className="bg-shade-white-default w-80">
              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">築年数</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">階指定</h2>
              </div>

              <div className="p-3">
                <RadioGroup>
                  <Radio label="指定なし" value="relance" />
                  <Radio label="1分以内" value="1" />
                  <Radio label="3分以内" value="3" />
                  <Radio label="5分以内" value="5" />
                  <Radio label="10分以内" value="10" />
                  <Radio label="20分以内" value="20" />
                </RadioGroup>
              </div>

              <div className="bg-shade-light-default w-full p-2 ">
                <h2 className="text-shade-dark-default font-bold">土地権利</h2>
              </div>

              <div className="p-3">
                <Checkbox value="required" label="貸マンション" />
                <Checkbox value="required" label="貸アパート" />
                <Checkbox value="required" label="貸戸建て住宅" />
              </div>
            </div>
          </Menu>
        </div>

        <Wrapper apiKey={import.meta.env.GOOGLE_MAP_API} render={render}>
          <GoogleMapProvider center={center} zoom={zoom}>
            <MarkerCluster markers={locations} InfoWindowComponent={InfoWindow} />
            <Marker position={{ lat: 35.68156736022668, lng: 139.76761832643018 }} InfoWindowComponent={InfoWindow} />
          </GoogleMapProvider>
        </Wrapper>
      </div>
    </Layout>
  );
};
