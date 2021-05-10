declare module 'react-detect-offline' {
  export interface PollingConfig {
    url: string
    enabled: boolean
    interval: number
    timeout: number
  }
  export interface BaseProps {
    onChange?: (online: boolean) => void | undefined
    wrapperType?: string
    polling?: boolean | PollingConfig
  }
  export interface BaseState {
    online: boolean
  }
  export declare const defaultProps: BaseProps
  export declare const defaultPollingConfig: PollingConfig
  export declare const Base: React.ComponentClass<BaseProps, BaseState>
  export interface DetectorProps extends BaseProps {
    render: ({ online: boolean }) => JSX.Element | null
  }
  export interface DetectorState extends BaseState {}
  export declare const Detector: React.ComponentClass<
    DetectorProps,
    DetectorState
  >

  export interface OnlineProps extends BaseProps {}
  export interface OnlineState extends BaseState {}
  export declare const Online: React.ComponentClass<OnlineProps, OnlineState>
  export interface OfflineProps extends BaseProps {}
  export interface OfflineState extends BaseState {}
  export declare const Offline: React.ComponentClass<OfflineProps, OfflineState>
}
