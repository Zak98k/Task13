module.exports = (arr, scheme, transform = false) => {
  let value;
  return !transform
    ? arr.filter((item) => compareObjectsUsingScheme(item, scheme))
    : [...arr]
      .map((item) =>
        (value = transformByScheme(item, scheme)) ? value : item
      )
      .filter((item) => compareObjectsUsingScheme(item, scheme));

  const itemScheme = (val) => {
    switch (typeof val) {
      case "object":
        if (Array.isArray(val)) return "array";
        break;
      case "boolean":
        return "bool";
    }
    return typeof val;
  };

  const intOrFloat = (val) => (Number.isInteger(val) ? "int" : "float");

  const compareValueWithSchemaForPrimitives = (val, scheme) => {
    if (scheme === "int" || scheme === "float") {
      return typeof val === "number" ? intOrFloat(val) === scheme : false;
    }
    return itemScheme(val) === scheme;
  };

  const transformByScheme = (val, scheme) => {
    const valScheme = itemScheme(val);
    switch (typeof scheme === "string" ? scheme : "object") {
      case "string":
        if (valScheme === "number") return val.toString();
        break;
      case "number":
        if (valScheme === "string") {
          return isFinite(val) ? +val : false;
        }
        break;
      case "object":
        if (valScheme === "object") {
          const valProps = Object.getOwnPropertyNames(val);
          const schemeProps = Object.getOwnPropertyNames(scheme);
          if (!contains(val, scheme)) return false;
          const newObj = {};
          for (let i = 0; i < schemeProps.length; i++) {
            !compareObjectsUsingScheme(
              val[schemeProps[i]],
              scheme[schemeProps[i]]
            )
              ? (newObj[schemeProps[i]] = transformByScheme(
                val[schemeProps[i]],
                scheme[schemeProps[i]]
              ))
              : (newObj[schemeProps[i]] = val[schemeProps[i]]);
          }
          return newObj;
        }
    }
    return false;
  };

  const contains = (obj, schemaObj) => {
    return !!Object.getOwnPropertyNames(schemaObj).every((item) =>
      Object.getOwnPropertyNames(obj).includes(item)
    );
  };

  const compareObjectsUsingScheme = (obj, schemaObj) => {
    if (typeof schemaObj === "string") {
      return compareValueWithSchemaForPrimitives(obj, schemaObj);
    }
    const objProps = Object.keys(obj);
    const schemeProps = Object.keys(schemaObj);

    if (!contains(objProps, schemeProps)) return false;
    if (objProps.length !== schemeProps.length) return false;
    for (let i = 0; i < schemeProps.length; i++) {
      if (!compareValueWithSchemaForPrimitives(
        obj[schemeProps[i]],
        schemaObj[schemeProps[i]]
      )
      ) {
        return false;
      }
    }
    return true;
  }
}

