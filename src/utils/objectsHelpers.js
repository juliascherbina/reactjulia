
export const updateObjectInArray = (items, itemid, ObjPropName, newObjProps) => {
  return   items.map(u => {
        if (u[ObjPropName] === itemid) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}
