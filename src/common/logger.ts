import pino from "pino";

const l = pino({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL || "info",
  serializers: { error: pino.stdSerializers.err },
});

export default l;
