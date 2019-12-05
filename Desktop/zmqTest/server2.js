const zmq = require("./zeroMQ-test");

zmq.pullSocket(3000);

zmq.subscriber(3001);