export const isValidEmail = (val) => {
    let reg = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/);

    if (val.length == 0) {
        return (false);
    } else if (reg.test(val) == false) {
        return (false);
    } else if (reg.test(val) == true) {
        return (true);
    }
};

export const isValidPassword = (val) => {
  
    if (val.length == 0) {
      return(false);
    }
    else if (val.length  < 3) {
        return(false);

    }else{
        return(true);

    }
};

export const isValidREpassword = (val,text) => {

    if (val.length == 0) {
      return(false);
    }
    else if (val.length  < 3) {
        return(false);

    }else if (val === text ) {
        return(true);
    }else{
        return (true);

    }
}
