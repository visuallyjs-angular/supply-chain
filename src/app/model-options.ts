import {
  VisuallyJsModel,
  ModelOptions,
  ObjectData
} from "@visuallyjs/browser-ui"


const modelOptions:ModelOptions = {
  edgeFactory:(model:VisuallyJsModel, type:string, data:ObjectData, cb:(o:ObjectData) => any) => {
    cb({
      type,
      value:100,
      transitMode:"Air",
      carrier:"FedEx"
    })

    return true
  }
}

export default modelOptions
