export function validateEmail(text){
    let pattern = /([A-z\d\.-]+@[A-z]+(\.[A-z]+)+)/
    return pattern.test(text)
}