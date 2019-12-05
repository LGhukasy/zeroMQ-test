const zmq = require("./zeroMQ-test");

// zmq.pushSocket(3000,"message1","message2","message3");

zmq.publisher(3001,"mymessage","message3");