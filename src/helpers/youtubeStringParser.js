const parseString = (str) => {
    return str.split("&").reduce((params, param) => {
        var paramSplit = param.split("=").map((value) => {
            return decodeURIComponent(value.replace("+", " "));
        });
        params[paramSplit[0]] = paramSplit[1];
        return params;
    }, {});
};

export default parseString;
