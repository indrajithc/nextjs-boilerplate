export interface IconProps {
  className?: string;
}

export interface RootState {
  isOpenSideBar: Boolean;
}

export interface RootProviderProps extends RootState {
  updateOpenSideBar: (status: Boolean) => void;
}

export interface ReactChildren {
  children: React.ReactNode;
}
