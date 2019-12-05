const zmq = require("zeromq");

module.exports.getZMQ = function () {
    return zmq;
};

module.exports.pushSocket = async function (port, ...messages) {
    const sock = new zmq.Push;
    await sock.bind(`tcp://127.0.0.1:${port}`);
    console.log(`created push socket in ${port} port`);

    let promiseArr = [];

    for (const item of messages) {
        promiseArr.push(await sock.send(item))
        console.log(item)
    }

};

module.exports.pullSocket = async function (port) {
    const sock = new zmq.Pull;

    sock.connect(`tcp://127.0.0.1:${port}`);
    console.log(`created pull socket in ${port} port`);
    for await (const [msg] of sock) {
        console.log("work: %s", msg.toString())
    }
}

module.exports.publisher = async function (port,...message) {
    const sock = new zmq.Publisher
   
    await sock.bind(`tcp://127.0.0.1:${port}`)
    console.log(`Publisher bound to port ${port}`)
    await sock.send(message)
  };

module.exports.subscriber = async function(port){
    const sock = new zmq.Subscriber;
    sock.connect(`tcp://127.0.0.1:${port}`);
    sock.subscribe("mymessage")
  console.log(`Subscriber connected to port ${port}`)
 
  for await (const [topic, msg] of sock) {
    console.log("received a message related to:", topic, "containing message:", msg)
  }
}