import http from "./http_common";


//get all centers
export const getCenter = async () => {


  let result = await http.get("/center/getCenter")
  return result.data
}

// add new center
export const addCenter = async center_name => {


  const result = await http.post("/center/addCenter", { center_name })
  return result.data
}

// update a center 
export const updateCenter = async data => {

  const result = await http.post("/center/updateCenter", data)
  return result.data
}

// delete Center
export const deleteCenter = async (center_id) => {

  let result = await http.delete("/center/deleteCenter", { params: { center_id } })
  return result.data
}
