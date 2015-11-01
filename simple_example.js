var mqtt =  require('mqtt');
var client = mqtt.connect('mqtt://test.mosquitto.org');
var i = -20;
client.on('connect',function(){
  client.publish('temp/random','10');
});
client.on('message',function(topic,message){
  console.log("Topico: "+topic+" | Mensagem: "+message);
  client.end();
});
setInterval(function(){
  client.publish('temp/random','M:'+i);
  i++;
  if(i > 50) i = -20;
},1000);
