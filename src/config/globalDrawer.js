let _drawer;

export function setGlobalDrawer(drawerRef) {
  _drawer = drawerRef;
}

export function open() {
    _drawer.open()
}

export function close() {
    _drawer.close()
}