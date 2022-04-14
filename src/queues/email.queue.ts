import Bull from "bull";
import emailProcess from "../processes/email.process";

const emailQueue = new Bull("email", {
  redis: { port: 6379, host: "127.0.0.1" },
});

emailQueue.process(emailProcess);

const sendNewEmail = (data: any) => {
  emailQueue.add(data, {});
};

export { sendNewEmail };
