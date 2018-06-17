let _drawer;

export function setGlobalDrawerr(drawerRef) {
  _drawer = drawerRef;
}

export function open() {
    _drawer.open()
}

export function close() {
    _drawer.close()
}