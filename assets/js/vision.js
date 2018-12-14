
const features = ['LABEL_DETECTION', 'TEXT_DETECTION', 'FACE_DETECTION', 'LANDMARK_DETECTION', 'LOGO_DETECTION', 'SAFE_SEARCH_DETECTION', 'IMAGE_PROPERTIES']


const likelyhoodValue = {
    'UNKNOW':null,
'VERY_UNLIKELY':-2,
'UNLIKELY':-1,
'POSSIBLE':0, 
'LIKELY':1,
 'VERY_LIKELY':2 }

var visionOption=JSON.stringify({"requests":[{  "image":{    "source":{"imageUri":"https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/Charlie-Day-Always-Sunny-GettyImages-459146160-1-920x584.jpg"}}  ,  "features": [{"type":features[5],"maxResults":5}]    } ]});
var visionResponse=new XMLHttpRequest;

visionResponse.onload=function(){console.log(visionResponse.responseText)};
visionResponse.open("POST","https://vision.googleapis.com/v1/images:annotate?key=AIzaSyA9EHeI2lrYJnjfEMhI0rU-J8yyfAOSOAs",!0);
visionResponse.send(visionOption)
