const coinModel =require("../model/coinModel")
const axios=require("axios")


const coinFun =async function(req,res){
    try{
        let options={
            method:"get",
            url:"https://api.coincap.io/v2/assets",
            headers:{Authorization :""}
}
    const result=await axios(options)
    let data=result.data.data
    const value =await coinModel.create(data)
    return res.status(200).send({status:true,data:data })
    }catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}
module.exports.coinFun =coinFun