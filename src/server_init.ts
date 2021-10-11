import "./common/env";
import Server from "./common/server";
import routes from "./routes";
import socketInit from "./socket.io/main";
import { lightstep, opentelemetry } from 'lightstep-opentelemetry-launcher-node'

const port = parseInt(process.env.PORT ?? "3000", 10);

const sdk = lightstep.configureOpenTelemetry();

sdk.start().then(() => {
    new Server().router(routes).listen(port, socketInit);
});

function shutdown() {
sdk.shutdown().then(
    () => console.log("SDK shut down successfully"),
    (err) => console.log("Error shutting down SDK", err),
).finally(() => process.exit(0))
};

process.on('exit', shutdown);
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
