let _alert;

export function setTopLevelAlert(alertRef) {
  _alert = alertRef;
}
export function close(){
    _alert.close();
}
export function dropDownAlert(alertInfo){
    _alert.alertWithType(alertInfo.type,alertInfo.title,alertInfo.message);
}